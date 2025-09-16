import React from "react";
import { Navbar } from "@/components/example-4/Navbar";

import { RepoCard } from "./Reuse";

export default async function Page4() {
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

        <RepoCard />
      </main>
    </div>
  );
}
