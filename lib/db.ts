// app/api/db.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("❌ MONGODB_URI が設定されていません");
}

let client: MongoClient | null = null;
let db: Db | null = null;

export async function getDB(): Promise<Db> {
  if (db) return db;

  if (!client) {
    client = new MongoClient(uri!);
  }

  await client.connect(); // v5 以降はこれだけでOK

  db = client.db(process.env.DB_NAME || "turquoise");
  return db;
}
