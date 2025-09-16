import { requireUser } from "./require-user";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export async function fetchUsers(): Promise<User[]> {
  await requireUser();
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5",
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 600 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}
