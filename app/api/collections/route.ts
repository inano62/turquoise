import { NextResponse } from "next/server";
import { getDB } from "../db";

export async function GET() {
  const db = await getDB();
  const collections = await db.listCollections().toArray();

  return NextResponse.json({
    ok: true,
    collections: collections.map(c => c.name),
  });
}
