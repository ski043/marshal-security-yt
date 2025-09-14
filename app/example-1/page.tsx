import isEven from "is-even";
import isOdd from "is-odd";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//n % 2 computes the remainder when n is divided by 2 (the modulo/remainder operator).
//=== 0 checks strict equality to 0 (no type coercion).
//Together, it returns true if n is evenly divisible by 2 (i.e., n is even), otherwise false.
function isEvenNative(n: number): boolean {
  return n % 2 === 0;
}

function isOddNative(n: number): boolean {
  return !isEvenNative(n);
}

export default async function ExampleOnePage({
  searchParams,
}: {
  searchParams: Promise<{ n?: string }>;
}) {
  const { n: nParam } = await searchParams;

  // Keep it simple for the demo: assume the input is a valid number if provided.
  let pkgEven: string = "—";
  let pkgOdd: string = "—";
  let nativeEven: string = "—";
  let nativeOdd: string = "—";

  if (nParam) {
    const n = Number(nParam);
    pkgEven = String(isEven(n));
    pkgOdd = String(isOdd(n));
    nativeEven = String(isEvenNative(n));
    nativeOdd = String(isOddNative(n));
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Example 1 — NPM package risk: is-even / is-odd
        </h1>
        <p className="text-sm text-muted-foreground">
          This demo shows how trivial packages can become a supply chain risk.
          We compare results from
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5">
            is-even
          </code>{" "}
          and
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5">is-odd</code> to
          a native implementation.
        </p>
      </div>

      <form className="space-y-4" action="/example-1" method="get">
        <label className="block text-sm font-medium">Enter an integer</label>
        <div className="flex items-center gap-2">
          <input
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            type="number"
            name="n"
            defaultValue={nParam ?? ""}
            placeholder="e.g. 2"
            inputMode="numeric"
            aria-label="Number"
          />
          <Button type="submit">Evaluate</Button>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="text-muted-foreground">Quick inputs:</span>
          {["-3", "0", "1", "2", "13", "42"].map((v) => (
            <Button key={v} asChild size="sm" variant="ghost">
              <Link href={`/example-1?n=${v}`}>{v}</Link>
            </Button>
          ))}
        </div>
      </form>

      <div className="rounded-lg border p-4">
        <h2 className="mb-2 text-lg font-medium">Results</h2>
        {!nParam ? (
          <p className="text-sm text-muted-foreground">
            Provide an integer above to see results.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
              <span className="text-muted-foreground">is-even(package)</span>
              <span className="font-mono">{pkgEven}</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
              <span className="text-muted-foreground">is-odd(package)</span>
              <span className="font-mono">{pkgOdd}</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
              <span className="text-muted-foreground">isEven(native)</span>
              <span className="font-mono">{nativeEven}</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-muted/40 px-3 py-2">
              <span className="text-muted-foreground">isOdd(native)</span>
              <span className="font-mono">{nativeOdd}</span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2 text-sm">
        <h3 className="font-medium">Why this matters</h3>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>
            Trivial packages increase supply chain surface area. If a maintainer
            account is compromised, updates may contain malware (typosquatting,
            credential theft, crypto miners, etc.).
          </li>
          <li>
            Prefer standard language features for simple logic:{" "}
            <code>n % 2 === 0</code> and
            <code className="ml-1">n % 2 !== 0</code>.
          </li>
          <li>
            Pin versions, use lockfiles, and audit dependencies regularly.
            Consider allowlists and CI gates.
          </li>
        </ul>
      </div>
    </div>
  );
}
