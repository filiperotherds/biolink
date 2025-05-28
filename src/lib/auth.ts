import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "./db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        
        const user = await db.users.findFirst({
          where: { email: credentials.email, password: credentials.password }
        })

        if (!user) {
          throw new Error("Credenciais Inválidas.")
        }

        return user;

      },
    }),
  ],
});
