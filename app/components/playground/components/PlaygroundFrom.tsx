"use client";

import { useState } from "react";
import { Button } from "@/components/ui/buttons";

export function PlaygroundForm({ onAdd }: { onAdd: (item: any) => void }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ★ JWT から userId を取り出す（インビジブル）
    const token = localStorage.getItem("token");
    const payload = token ? JSON.parse(atob(token.split(".")[1])) : null;
    const userId = payload?.userId;

    // ① 楽観的 UI：仮データを即追加
    const tempId = "temp-" + Math.random().toString(36).slice(2);
    const optimisticItem = {
      _id: tempId,
      title,
      author,
      text,
      userId, // ← UI に出さないけど内部で保持
      createdAt: new Date().toISOString(),
      optimistic: true,
    };
    onAdd(optimisticItem);

    // ② DB に送信（userId を含める）
    const res = await fetch("/api/playground", {
      method: "POST",
      body: JSON.stringify({ title, author, text, userId }),
    });
    const data = await res.json();

    // ③ DB から返ってきた正式データで置き換え
    onAdd({
      ...optimisticItem,
      _id: data.id,
      optimistic: false,
    });

    // フォームリセット
    setTitle("");
    setAuthor("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="作成者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="内容"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button variant="secondary">追加</Button>
    </form>
  );
}