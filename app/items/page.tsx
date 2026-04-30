"use client";

import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    setItems(await res.json());
  };

  const createItem = async () => {
    await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchItems();
  };

  const updateItem = async (id: string) => {
    const newTitle = prompt("New title");
    if (!newTitle) return;

    await fetch(`/api/items/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: newTitle }),
    });
    fetchItems();
  };

  const deleteItem = async (id: string) => {
    await fetch(`/api/items/${id}`, { method: "DELETE" });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Items</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <button onClick={createItem}>Create</button>

      <ul>
        {items.map((item: any) => (
          <li key={item._id}>
            {item.title}
            <button onClick={() => updateItem(item._id)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
