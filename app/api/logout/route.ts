import { NextResponse } from "next/server";
import { cors } from "../_cors";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: cors() });
}

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 0,
  });
  return res;
}
