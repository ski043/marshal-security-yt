"use client";

import * as React from "react";

interface LeakyClientProps {
  serverSecret?: string;
}

export function LeakyClient({ serverSecret }: LeakyClientProps) {
  // NEXT_PUBLIC_* env vars are inlined into client bundles at build time
  const publicToken = process.env.NEXT_PUBLIC_PUBLIC_TOKEN;
  // Server-only env vars are NOT available in the client bundle
  const serverSecretFromEnv = process.env.SERVER_SECRET;

  return (
    <div className="rounded-lg border p-4 space-y-2 text-sm">
      <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
        <span className="text-muted-foreground">
          NEXT_PUBLIC_PUBLIC_TOKEN (from env)
        </span>
        <span className="font-mono break-all">
          {String(publicToken ?? "undefined")}
        </span>
      </div>

      <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
        <span className="text-muted-foreground">
          SERVER_SECRET via process.env (client)
        </span>
        <span className="font-mono break-all">
          {String(serverSecretFromEnv)}
        </span>
      </div>

      <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
        <span className="text-muted-foreground">
          SERVER_SECRET passed as prop (would leak; not passed)
        </span>
        <span className="font-mono break-all text-destructive">
          {serverSecret ? serverSecret : "not passed"}
        </span>
      </div>

      <p className="text-xs text-muted-foreground">
        Any value rendered here is shipped to the browser and visible in
        DevTools or the page source.
      </p>
    </div>
  );
}
