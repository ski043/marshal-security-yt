import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          MarshalSecurity
        </Link>
        <nav className="flex items-center gap-2">
          {user ? (
            <LogoutLink className={buttonVariants()}>Sign out</LogoutLink>
          ) : (
            <>
              <LoginLink className={buttonVariants({ variant: "outline" })}>
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants()}>Sign up</RegisterLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
