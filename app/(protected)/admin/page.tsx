import { auth } from "@/auth"

export default async function AdminPage() {
  const session = await auth();

  return (
    <>
      session:
      { JSON.stringify(session) }
    </>
  )
}
