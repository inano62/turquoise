import { NextResponse } from "next/server";
import { getDB } from "../db";

export async function POST(req: Request) {
  const db = await getDB();
  const form = await req.formData();

  const data = {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
    createdAt: new Date(),
  };

  const result = await db.collection("contact").insertOne(data);

  return NextResponse.json({ ok: true, id: result.insertedId });
}