import { NextResponse } from "next/server";
import { getDB } from "./db";

export async function GET() {
  try {
    const db = await getDB();
    const status = await db.command({ ping: 1 });

    return NextResponse.json({
      ok: true,
      mongo: status,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
