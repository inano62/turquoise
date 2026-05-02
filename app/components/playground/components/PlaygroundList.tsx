"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons";
import { PlaygroundForm } from "./PlaygroundFrom";

export function PlaygroundList() {
  const [items, setItems] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 編集用 state
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editText, setEditText] = useState("");

  function addItem(newItem: any) {
    setItems((prev: any) => {
      if (newItem.optimistic === false) {
        return prev.map((item: any) =>
          item._id.startsWith("temp-") ? newItem : item
        );
      }
      return [...prev, newItem];
    });
  }

  function handleEdit(item: any) {
    setEditingId(item._id);
    setEditTitle(item.title || "");
    setEditAuthor(item.author || "");
    setEditText(item.text || "");
  }

  async function handleSave(id: string) {
    await fetch("/api/playground", {
      method: "PUT",
      body: JSON.stringify({
        id,
        title: editTitle,
        author: editAuthor,
        text: editText,
      }),
    });

    setItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, title: editTitle, author: editAuthor, text: editText }
          : item
      )
    );

    setEditingId(null);
  }

  async function handleDelete(id: string) {
    await fetch("/api/playground", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    setItems((prev) => prev.filter((item) => item._id !== id));
  }

  async function load() {
    const res = await fetch("/api/playground");
    const data = await res.json();
    setItems(data.items);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <PlaygroundForm onAdd={addItem} />

      <ul className="space-y-4 mt-6">
        {items.map((item: any) => (
          <li
            key={item._id}
            className={`border p-4 rounded-xl bg-white shadow-sm ${
              item.optimistic ? "opacity-50" : ""
            }`}
          >
            {editingId === item._id ? (
              <>
                {/* 編集モード */}
                <input
                  className="border p-2 w-full mb-2"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="タイトル"
                />

                <input
                  className="border p-2 w-full mb-2"
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                  placeholder="作成者"
                />

                <textarea
                  className="border p-2 w-full mb-2"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="内容"
                />

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleSave(item._id)}
                  >
                    保存
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingId(null)}
                  >
                    キャンセル
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* 通常表示 */}
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.title || "(タイトルなし)"}
                </h2>

                <div className="text-sm text-gray-500 mt-1">
                  {item.author || "(作成者なし)"}
                </div>

                <p className="mt-3 text-gray-700 whitespace-pre-wrap">
                  {item.text || "(内容なし)"}
                </p>

                <div className="text-xs text-gray-400 mt-2">
                  作成: {new Date(item.createdAt).toLocaleString()}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(item)}
                  >
                    編集
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleDelete(item._id)}
                  >
                    削除
                  </Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}