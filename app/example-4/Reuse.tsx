import { fetchNextRepo } from "../data/github/get-repo-data";

export async function RepoCard() {
  const repo = await fetchNextRepo();
  return (
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
          scalable web applications. It provides a batteries‑included developer
          experience with file‑system routing, Server Components, data fetching
          primitives, edge/runtime flexibility, image optimization, and
          first‑class TypeScript support. The
          <code className="mx-1">vercel/next.js</code> repository is the home of
          the framework, its documentation, examples, and the Issue/PR tracker
          used by the community.
        </p>
      </div>
    </div>
  );
}
