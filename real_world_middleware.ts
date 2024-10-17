import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mock data
const AUTHENTICATED_USERS = new Set(["user1", "user2", "user3"]);
const BLOCKED_IPS = new Set(["123.123.123.123", "234.234.234.234"]);

export function middleware(request: NextRequest) {
  // Read the request
  const country = request.geo?.country || "US";
  const userAgent = request.headers.get("user-agent") || "";
  const clientIp = request.ip || "";
  const abTestCookie = request.cookies.get("ab-test");
  const authToken = request.cookies.get("auth-token")?.value;

  // Manipulate the response
  const response = NextResponse.next();

  response.headers.set("X-User-Country", country);
  response.headers.set("X-AB-Test-Variant", abTestCookie?.value || "A");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Content-Type-Options", "nosniff");

  if (userAgent.toLowerCase().includes("bot")) {
    return new NextResponse("Bots are not allowed", { status: 403 });
  }

  if (BLOCKED_IPS.has(clientIp)) {
    return new NextResponse("Access denied", { status: 403 });
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!authToken || !AUTHENTICATED_USERS.has(authToken)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(
      new URL(`/${country.toLowerCase()}`, request.url)
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
