import Link from "next/link";
import {
  ShieldAlert,
  Bug,
  EyeOff,
  Lock,
  KeySquare,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10 space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">
          Next.js Security Pitfalls
        </h1>
        <p className="text-base text-muted-foreground">
          A set of small demos for a YouTube video, showcasing how seemingly
          harmless patterns can lead to security risks — and how to avoid them.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/example-1"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <ShieldAlert className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 1 — NPM package risk
              </h2>
              <p className="text-sm text-muted-foreground">
                Comparing <code>is-even</code>/<code>is-odd</code> to native
                logic. Trivial deps increase supply chain risk.
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/example-2"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <Bug className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 2 — Validation & Sanitization
              </h2>
              <p className="text-sm text-muted-foreground">
                Zod-based validation, open-redirect checks, and safe vs. unsafe
                rendering (XSS).
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/example-3"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <EyeOff className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 3 — Env leaks via client
              </h2>
              <p className="text-sm text-muted-foreground">
                Why <code>NEXT_PUBLIC_*</code> is public and how secrets leak
                when passed to client components.
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/example-4"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <Lock className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 4 — Data fetching risks
              </h2>
              <p className="text-sm text-muted-foreground">
                Fetch public data in Server Components. Mind rate limits and
                never expose secrets.
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/example-5"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <KeySquare className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 5 — Page auth vs middleware
              </h2>
              <p className="text-sm text-muted-foreground">
                Middleware helps, but always enforce auth at the page/data
                layer. Demo with a fake private UI.
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/example-6"
          className="group rounded-xl border bg-card p-5 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-primary/10 p-2 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-medium">
                Example 6 — Security headers
              </h2>
              <p className="text-sm text-muted-foreground">
                Why headers like CSP matter and how we’ll use Nosecone in
                middleware to set them automatically.
              </p>
              <span className="inline-block text-sm text-primary underline underline-offset-4 group-hover:opacity-100">
                View demo →
              </span>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
