import { NextResponse, NextRequest } from "next/server";
import { getDB } from "../../db";

export async function GET(req: NextRequest, { params }: any) {
  const db = await getDB();
  const col = params.name;

  const docs = await db.collection(col).find({}).toArray();

  return NextResponse.json({ ok: true, docs });
}
