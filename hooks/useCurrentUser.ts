import { useSession } from "next-auth/react";;

export const useCurrentUser = () => {
  const session = useSession();

  // TODO: add role propertie and add to user object

  return session.data?.user
}