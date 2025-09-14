import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

export async function Navbar() {
  const user = false;
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          MarshalSecurity
        </Link>
        <nav className="flex items-center gap-2">
          {user ? (
            <Button>Sign out</Button>
          ) : (
            <>
              <Link
                href="/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Sign in
              </Link>
              <Link href="/register" className={buttonVariants()}>
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
