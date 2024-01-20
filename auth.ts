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
  callbacks: {
    async session({ session, token }) {
      console.log(session);
      if(token.sub && session.user){
        session.user.id = token.sub;
      }

      if(token.role && session.user){
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token }) {
      // ? if token don't have sub return token;
      if(!token.sub) return token;
      // ? if token have sub, check if user exists
      const existingUser = await getUserById(token.sub);
      //? If user exists, return token with role
      if(!existingUser) return null;
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});