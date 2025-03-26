import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = false; // Simulate authentication check

  if (request.nextUrl.pathname.startsWith("/board") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect if not logged in
  }
  return NextResponse.next(); // Allow request if logged in or not on /board
}

// ✅ Apply middleware only to "/board/*" routes
export const config = {
  matcher: ["/board/:path*"], // Runs middleware on all "/board/*" routes
};
