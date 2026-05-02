import { NextResponse } from "next/server";
import { getDB } from "@/api/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const db = await getDB();

  const exists = await db.collection("users").findOne({ email });
  if (exists) {
    return NextResponse.json({ ok: false, error: "User exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

await db.collection("users").insertOne({
  email,
  password: hashed,
  createdAt: new Date(),
  profile: {
    displayName: email.split("@")[0],
    bio: "",
    avatar: "/default.png",
    homepageSlug: email.split("@")[0]
  }
});

  return NextResponse.json({ ok: true });
}
