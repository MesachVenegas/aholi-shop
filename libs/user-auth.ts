import { auth } from "@/auth";
import { getUserById } from "@/data/user";


export const currentUser = async () => {
  const session = await auth();

  return session?.user;

}

export const currentRole = async () => {
  const session = await auth();

  if (session?.user.id) {
    const userId = session.user.id;
    const user = await getUserById(userId);

    if (!user) return;

    return user?.role;
  }

  return;
}

