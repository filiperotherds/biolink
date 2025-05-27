import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "admin@admin.com";
        const password = "admin";

        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
});
