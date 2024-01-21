import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from "@/libs/prisma";
import { getUserById } from "./data/user";



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
        where: {
          id: user.id
        },
        data: {
          emailVerified: new Date()
        }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }){
      // ? Allow  OAuth without email verification
      if(account?.provider !== "credentials") return true;
      // ? Refuse access if account isn't verified
      const existingUser = await getUserById(user.id as string);
      if(!existingUser?.emailVerified) return false;
      // TODO: Add 2FA check

      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      // ? if token don't have sub return token;
      if (!token.sub) return token;
      // ? if token have sub, check if user exists
      const existingUser = await getUserById(token.sub);
      //? If user exists, return token with role
      if (!existingUser) return null;
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});