import NextAuth from "next-auth";
import { Role } from "@prisma/client";
import { PrismaAdapter } from '@auth/prisma-adapter';

import prisma from "@/libs/prisma";
import authConfig from "@/auth.config";
import { getUserByEmail, getUserById } from "@/data/user";



export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      });
    },
  },
  callbacks: {
    async signIn({ user, account }){
      // ? Allow  OAuth without email verification
      if(account?.provider !== "credentials") return true;

      // ? Refuse access if account isn't verified
      const existingUser = await getUserById(user.id as string);
      if(!existingUser?.emailVerified) return false;

      return true
    },
    async session({ session }) {
      if (session && session.user) {
        const userExist = await getUserByEmail(session.user.email as string)

        if (userExist) {
          session.user.id = userExist.id;
          session.user.role = userExist.role as Role;
        }

      }

      return session;
    },
    async jwt({ token }) {
      // ? if token don't have sub return token;
      if (!token.sub) return token;

      // ? if token have sub, check if user exists
      const existingUser = await getUserById(token.sub);

      //? If user isn't exists, return token
      if (!existingUser) return token;

      token.id = token.sub;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});