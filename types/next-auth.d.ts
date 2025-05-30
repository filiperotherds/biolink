// types/next-auth.d.ts
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface User {
    /** O enum Role do seu schema Prisma */
    role: Role;
  }
  interface Session {
    user: {
      /** garante que session.user.role existe */
      role: Role;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: Role;
    credentials?: boolean;
  }
}
