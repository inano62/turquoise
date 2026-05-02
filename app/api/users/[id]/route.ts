import { NextResponse } from "next/server";
import { getDB } from "@/api/db";
import { ObjectId } from "mongodb";

export async function GET(req:any, { params}:any) {
  const db = await getDB();
  const user = await db.collection("users").findOne({
    _id: new ObjectId(params.id),
  });
  return NextResponse.json(user);
}

export async function PUT(req:any, { params }:any) {
  const { displayName, bio } = await req.json();
  const db = await getDB();

  await db.collection("users").updateOne(
    { _id: new ObjectId(params.id) },
    {
      $set: {
        "profile.displayName": displayName,
        "profile.bio": bio,
      },
    }
  );

  return NextResponse.json({ ok: true });
}