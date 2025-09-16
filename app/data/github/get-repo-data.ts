import "server-only";

import { requireUser } from "../user/require-user";

interface RepoInfo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
}

export async function fetchNextRepo(): Promise<RepoInfo> {
  await requireUser();
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "marshalsecurity-demo",
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repo data from GitHub");
  }

  return res.json();
}
