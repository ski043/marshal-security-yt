import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeakyClient } from "@/components/example-3/leaky-client";
import { experimental_taintUniqueValue } from "react";

function maskSecret(secret?: string): string {
  if (!secret) return "undefined";
  const visible = Math.min(2, secret.length);
  return `${secret.slice(0, visible)}${"•".repeat(
    Math.max(0, secret.length - visible)
  )}`;
}

export default async function ExampleThreePage() {
  // Server-only environment values. These are read on the server and MUST NOT be sent to the client.
  const serverSecret = process.env.SERVER_SECRET;
  const publicToken = process.env.NEXT_PUBLIC_PUBLIC_TOKEN;

  // gives a clear error if the secret leaks.
  // process keeps the rule active for the whole server process.
  // serverSecret is the exact sensitive value to block from reaching any Client Component.

  if (typeof serverSecret !== "undefined") {
    experimental_taintUniqueValue(
      "Do not pass API keys to the client.",
      process,
      serverSecret
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Example 3 — Env variable leaks
        </h1>
        <p className="text-sm text-muted-foreground">
          Secrets must never end up in the browser. <code>NEXT_PUBLIC_*</code>{" "}
          values are bundled for the client and are always public. Server
          secrets like <code>SERVER_SECRET</code> should only be used on the
          server and never passed to client components or rendered into HTML.
        </p>
      </div>

      <div className="rounded-lg border p-4 space-y-3 text-sm">
        <h2 className="text-lg font-medium">Server view (safe)</h2>
        <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
          <span className="text-muted-foreground">SERVER_SECRET (masked)</span>
          <span className="font-mono break-all">
            {maskSecret(serverSecret)}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
          <span className="text-muted-foreground">
            NEXT_PUBLIC_PUBLIC_TOKEN
          </span>
          <span className="font-mono break-all">
            {String(publicToken ?? "undefined")}
          </span>
        </div>
        <div className="flex gap-2 pt-1">
          <Button asChild size="sm" variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border p-4 space-y-3">
        <h2 className="text-lg font-medium">Client view</h2>
        <p className="text-xs text-muted-foreground">
          Below is a client component. Whatever it renders is shipped to the
          browser and visible in DevTools. Notice how <code>SERVER_SECRET</code>{" "}
          is <i>undefined</i> via <code>process.env</code> on the client, but by
          passing it as a prop we intentionally leak it into the page.
        </p>
        <LeakyClient serverSecret={serverSecret} />
      </div>

      <div className="space-y-2 text-sm">
        <h3 className="font-medium">Takeaways</h3>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>
            Only expose values with <code>NEXT_PUBLIC_*</code> if you are
            comfortable with users seeing them.
          </li>
          <li>
            Never pass secrets from server components to client components via
            props; that leaks them.
          </li>
          <li>
            Never render secrets into HTML or logs; use masking and keep
            handling strictly on the server.
          </li>
          <li>
            Prefer runtime access to secrets on the server (e.g., in Route
            Handlers or Server Actions).
          </li>
        </ul>
      </div>
    </div>
  );
}
