import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cors } from "../_cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors() });
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.json({ loggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ loggedIn: true, user: decoded });
  } catch {
    return NextResponse.json({ loggedIn: false });
  }
}
