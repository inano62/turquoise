import { NextResponse, NextRequest } from "next/server";
import { getDB } from "../db";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);

    const db = await getDB();
    const users = await db.collection("users")
      .find({}, { projection: { password: 0 } }) // パスワードは絶対に返さない
      .toArray();

    return NextResponse.json({ ok: true, users });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid token" }, { status: 401 });
  }
}
