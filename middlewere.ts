import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // --- CORS（必要なら） ---
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // --- Admin 配下の保護 ---
  if (url.pathname.startsWith("/api/admin")) {
    const token = req.headers.get("Authorization");

    if (!token) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // ここでは形式チェックだけ（本物の検証は requireRole.ts 側で行う）
    if (!token.startsWith("Bearer ")) {
      return new NextResponse("Invalid Token", { status: 401 });
    }
  }

  return response;
}

// --- 適用範囲 ---
export const config = {
  matcher: [
    "/api/:path*",   // API 全体に適用
  ],
};
