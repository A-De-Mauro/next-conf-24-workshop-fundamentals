import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/blocked")) {
    return NextResponse.redirect(new URL("/one", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" on the docs to learn more
export const config = {
  matcher: "/",
};
