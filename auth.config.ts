import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import Google from "next-auth/providers/google";

import bcrypt from "bcrypt";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                // ? Validate form fields
                const validateFields = LoginSchema.safeParse(credentials);
                // ? if are valids
                if (validateFields.success) {
                    const { email, password } = validateFields.data;
                    // ? Check if user exists
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;
                    // ? Check if password match
                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password
                    );
                    //? If match, return user
                    if (passwordMatch) return user;
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig;
