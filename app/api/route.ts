// app/api/items/route.ts
import { NextResponse } from "next/server";
import { getDB } from "./db";

export async function GET() {
  const db = await getDB();
  const items = await db.collection("items").find().toArray();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();
  const db = await getDB();

  const result = await db.collection("items").insertOne({
    title: body.title,
    createdAt: new Date(),
  });

  return NextResponse.json({ insertedId: result.insertedId });
}
