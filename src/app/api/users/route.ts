import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { user_role } from "../../../../generated/prisma";

export async function GET(request: Request) {
    const url = new URL(request.url)
    const roleParam = url.searchParams.get('role') as user_role
  
    try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        role: false,
        password_hash: false,
      },
      where: {
        role: { equals: roleParam },
      },
    });
    return NextResponse.json(users);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch users: ", e },
      { status: 500 }
    );
  }
}
