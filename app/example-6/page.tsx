import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function ExampleSixPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          Example 6 — Security headers (middleware)
        </h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Home</Link>
        </Button>
      </div>

      <div className="rounded-lg border p-4 text-sm">
        <h2 className="text-lg font-medium">Why security headers matter</h2>
        <p className="mt-2 text-muted-foreground">
          HTTP security headers harden your app against common classes of
          attacks (XSS, clickjacking, MIME sniffing, leaky referrers, and
          insecure cross‑origin usage). We will use the
          <code className="mx-1">@nosecone/next</code> package to set and manage
          these headers in Next.js middleware so every response is protected by
          default.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4 text-sm">
          <h3 className="text-lg font-medium">What the middleware does</h3>
          <ul className="mt-2 list-disc pl-5 text-muted-foreground">
            <li>
              Runs before your route handlers and pages to attach headers to
              responses.
            </li>
            <li>
              Centralizes your security posture so you don’t forget headers on
              individual routes.
            </li>
            <li>
              Lets you customize policies (e.g., allow YouTube embeds or
              analytics domains).
            </li>
            <li>
              Pairs well with page‑level authorization — headers don’t replace
              access checks.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-4 text-sm">
          <h3 className="text-lg font-medium">Common headers applied</h3>
          <ul className="mt-2 list-disc pl-5 text-muted-foreground">
            <li>
              Content‑Security‑Policy (CSP) — controls where scripts, images,
              and frames can load from.
            </li>
            <li>X‑Content‑Type‑Options — prevents MIME type sniffing.</li>
            <li>
              Referrer‑Policy — limits what referrer data is sent to other
              sites.
            </li>
            <li>
              Permissions‑Policy — restricts powerful browser features (camera,
              geolocation, etc.).
            </li>
            <li>
              Cross‑Origin‑Embedder‑Policy (COEP) — secures cross‑origin
              resource usage.
            </li>
          </ul>
          <p className="mt-2 text-xs text-muted-foreground">
            Note: Exact headers depend on your Nosecone configuration in{" "}
            <code>middleware.ts</code>.
          </p>
        </div>
      </div>

      <div className="rounded-lg border p-4 text-sm">
        <h3 className="text-lg font-medium">Where it’s configured</h3>
        <p className="mt-2 text-muted-foreground">
          See <code>middleware.ts</code>. We create a Nosecone config (e.g., CSP
          directives) and wrap it with
          <code className="mx-1">createMiddleware</code>. The middleware is
          exported (optionally wrapped with auth helpers) so every request gets
          the headers applied.
        </p>
        <p className="mt-2 text-muted-foreground">
          You can inspect the headers in your browser DevTools → Network → (this
          page) → Headers.
        </p>
      </div>

      <div className="rounded-lg border p-4 text-sm">
        <h3 className="text-lg font-medium">Key takeaways</h3>
        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
          <li>
            Security headers are defense‑in‑depth — keep using input validation
            and output encoding.
          </li>
          <li>
            Middleware enforces headers globally, but it’s not a substitute for
            page‑level auth.
          </li>
          <li>
            Policies should be as strict as possible and relaxed only for
            documented use‑cases.
          </li>
        </ul>
      </div>
    </div>
  );
}
