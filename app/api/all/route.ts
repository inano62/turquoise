import { NextResponse } from "next/server";
import { getDB } from "../db";

export async function GET() {
  const db = await getDB();

  // 全コレクション一覧を取得
  const collections = await db.listCollections().toArray();

  const result: Record<string, any[]> = {};

  for (const c of collections) {
    const name = c.name;

    // system.* は除外
    if (name.startsWith("system.")) continue;

    // 各コレクションの全ドキュメントを取得
    const docs = await db.collection(name).find({}).toArray();

    result[name] = docs;
  }

  return NextResponse.json({ ok: true, data: result });
}
