import React from "react";
import { Navbar } from "@/components/example-4/Navbar";

interface RepoInfo {
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
}

export async function fetchNextRepo(): Promise<RepoInfo> {
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

export default async function Page4() {
  const repo = await fetchNextRepo();

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Example 4 — Data fetching risks
          </h1>
          <p className="text-sm text-muted-foreground">
            This page fetches public data from the GitHub API directly in a
            Server Component. No authentication or backend logic is used here.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4 text-sm">
            <h2 className="text-lg font-medium">Repository</h2>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
                <span className="text-muted-foreground">name</span>
                <span className="font-mono break-all">{repo.name}</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
                <span className="text-muted-foreground">stars</span>
                <span className="font-mono">
                  {repo.stargazers_count.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
                <span className="text-muted-foreground">forks</span>
                <span className="font-mono">
                  {repo.forks_count.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
                <span className="text-muted-foreground">open issues</span>
                <span className="font-mono">
                  {repo.open_issues_count.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
                <span className="text-muted-foreground">link</span>
                <a
                  className="font-mono text-primary underline underline-offset-4"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4 text-sm">
            <h2 className="text-lg font-medium">Description</h2>
            <p className="mt-3 text-muted-foreground">
              Next.js is a React framework by Vercel for building performant,
              scalable web applications. It provides a batteries‑included
              developer experience with file‑system routing, Server Components,
              data fetching primitives, edge/runtime flexibility, image
              optimization, and first‑class TypeScript support. The
              <code className="mx-1">vercel/next.js</code> repository is the
              home of the framework, its documentation, examples, and the
              Issue/PR tracker used by the community.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
