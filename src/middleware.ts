import { auth } from "@/lib/db/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (!session && (pathname.startsWith('/admin') || pathname.startsWith('/institution'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (session) {
    const userRole = session.user.role;

    if (pathname.startsWith('/admin') && userRole !== 'SYS_ADMIN') {

      return NextResponse.redirect(new URL('/institution/dashboard', request.url));
    }

    if ((pathname.startsWith('/institution/users') || pathname.startsWith('/institution/addresses')) && userRole !== 'MANAGER_USER') {

        return NextResponse.redirect(new URL('/institution/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/institution/:path*'],
};