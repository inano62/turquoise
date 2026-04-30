import { NextResponse } from "next/server";
import { getDB } from "../../db";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const body = await req.json();
  const db = await getDB();

  await db.collection("items").updateOne(
    { _id: new ObjectId(id) },
    { $set: { title: body.title } }
  );

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;
  const db = await getDB();

  await db.collection("items").deleteOne({ _id: new ObjectId(id) });

  return NextResponse.json({ ok: true });
}
