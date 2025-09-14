import Link from "next/link"

import { Button } from "@/components/ui/button"

interface User {
  id: number
  name: string
  email: string
  company: { name: string }
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5", {
    headers: { Accept: "application/json" },
    next: { revalidate: 600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch users")
  }
  return res.json()
}

export default async function ExampleFivePage() {
  const users = await fetchUsers()

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Example 5 — Page-level auth vs middleware</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">Home</Link>
        </Button>
      </div>

      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
        <h2 className="text-lg font-medium text-destructive">Super private area</h2>
        <p className="mt-2 text-sm text-destructive">
          This UI is extremely sensitive. Only authenticated users should be able to see it.
          Middleware alone is not sufficient — you must also verify authentication/authorization at the
          page and data-access layer. If not, bad things will happen.
        </p>
      </div>

      <div className="rounded-lg border p-4 text-sm">
        <h3 className="text-lg font-medium">Sample public data (server-fetched)</h3>
        <p className="mt-1 text-muted-foreground">
          Below is harmless, public data fetched in a Server Component to illustrate rendering content.
          In a real private page, you would verify the user before fetching or returning any sensitive data.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {users.map((u) => (
            <li key={u.id} className="rounded-md bg-muted/40 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{u.name}</span>
                <span className="text-xs text-muted-foreground">{u.company?.name}</span>
              </div>
              <div className="text-xs text-muted-foreground">{u.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
