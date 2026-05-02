import { NextResponse } from "next/server";
import { getDB } from "../db";
import { ObjectId } from "mongodb";

// CREATE
export async function POST(req: Request) {
  const { title, date, author, text } = await req.json();
  const db = await getDB();

  const result = await db.collection("playground").insertOne({
    title,
    date,
    author,
    text,
    createdAt: new Date(),
  });

  return NextResponse.json({ ok: true, id: result.insertedId });
}

// READ
export async function GET() {
  const db = await getDB();
  const items = await db.collection("playground").find().toArray();

  return NextResponse.json({ ok: true, items });
}

// UPDATE
export async function PUT(req: Request) {
  const { id, title, date, author, text } = await req.json();
  const db = await getDB();

  await db.collection("playground").updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, date, author, text } }
  );

  return NextResponse.json({ ok: true });
}

// DELETE
export async function DELETE(req: Request) {
  const { id } = await req.json();
  const db = await getDB();

  await db
    .collection("playground")
    .deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ ok: true });
}