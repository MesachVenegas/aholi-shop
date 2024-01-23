'use client'

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserById } from "@/data/user";

/**
 * Retrieves the role of a user by their ID.
 *
 * @param {string} id - The ID of the user.
 * @returns {Promise<string>} The role of the user.
 */
async function getRole(id:string) {
  const data = await getUserById(id);

  return data?.role;
}

/**
 * Custom hook that retrieves the current role of the user.
 *
 * @returns {string} The current role of the user.
 */
export const useCurrentRol = () => {
  const [role, setRole] = useState<string>();
  const session = useSession();
  const userId = session.data?.user.id;

  useEffect( () => {
    const res = getRole(userId as string) as unknown as string;
    setRole(res)
  },[userId])

  return role;
}