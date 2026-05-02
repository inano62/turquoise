"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/buttons";
import { PlaygroundForm } from "./PlaygroundFrom";
export function PlaygroundList() {
  const [items, setItems] = useState([]);

  function addItem(newItem: any) {
    setItems((prev:any) => {
      // 楽観的データの置き換え
      if (newItem.optimistic === false) {
        return prev.map((item:any) =>
          item._id === newItem._id || item._id.startsWith("temp-")
            ? newItem
            : item
        );
      }
      return [...prev, newItem];
    });
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
      {/* フォームに addItem を渡す */}
      <PlaygroundForm onAdd={addItem} />

      <ul className="space-y-4 mt-6">
        {items.map((item: any) => (
          <li
            key={item._id}
            className={`border p-4 rounded-xl bg-white shadow-sm ${
              item.optimistic ? "opacity-50" : ""
            }`}
          >
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
              <Button size="sm" variant="outline">編集</Button>
              <Button size="sm" variant="secondary">削除</Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}