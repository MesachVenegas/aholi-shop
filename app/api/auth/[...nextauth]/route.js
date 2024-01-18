import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prisma';

const handlerAuth = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Correo", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials, req) {
        // ? Validamos si existe el usuario
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } })

        if (!user) throw new Error("Usuario no encontrado");
        // ? Validación de la contraseña
        const isValid = await bcrypt.compare(credentials?.password, user?.password)

        if (!isValid) throw new Error("Contraseña invalida");

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          image: user.image
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ profile, account, token }) {

      if (account) {
        if (account.type === 'oauth') {
          const user = await prisma.user.findUnique({ where: { email: profile.email } })
          if(!user){
            await prisma.user.create({
              data: {
                name: token.name,
                email: token.email,
                image: token.picture,
                provider: account.provider,
              }
            })
          }

          token.accessToken = account.access_token
          token.id = profile.id

        } else if (account.type === 'credentials') {
          const user = await prisma.user.findUnique({ where: { email: token.email } })

          if (user) {
            token.id = user.id
            token.role = user.role
          }
        }
      }

      return token
    },
  },
})

export { handlerAuth as GET, handlerAuth as POST }