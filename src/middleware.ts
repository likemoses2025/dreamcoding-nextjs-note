import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware Running !!!");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 경로를 리다이렉트 함!!");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
