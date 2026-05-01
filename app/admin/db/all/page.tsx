"use client";

import { useEffect, useState } from "react";

export default function AllCollectionsPage() {
  const [data, setData] = useState<any>(null);
  const [mode, setMode] = useState<"table" | "json">("table");

  useEffect(() => {
    fetch("/api/all", { credentials: "include" })
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>All Collections</h1>

      <button onClick={() => setMode(mode === "table" ? "json" : "table")}>
        {mode === "table" ? "JSON 表示に切替" : "テーブル表示に切替"}
      </button>

      {Object.keys(data).map((col) => (
        <CollectionBlock
          key={col}
          col={col}
          docs={data[col]}
          mode={mode}
        />
      ))}
    </div>
  );
}

function CollectionBlock({ col, docs, mode }: any) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2>{col}</h2>

      {mode === "json" ? (
        <pre style={{
          background: "#f0f0f0",
          padding: 10,
          borderRadius: 6,
          overflowX: "auto"
        }}>
          {JSON.stringify(docs, null, 2)}
        </pre>
      ) : (
        docs.map((doc: any) => (
          <DocTable key={doc._id} col={col} doc={doc} />
        ))
      )}
    </div>
  );
}

function DocTable({ col, doc }: any) {
  const [editing, setEditing] = useState(false);
  const [local, setLocal] = useState(doc);
  const [newField, setNewField] = useState("");
  const [newValue, setNewValue] = useState("");

  async function save() {
    await fetch(`/api/collections/${col}/${doc._id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(local),
    });
    setEditing(false);
  }

  async function deleteField(key: string) {
    await fetch(`/api/collections/${col}/${doc._id}/unset`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ field: key }),
    });

    const updated = { ...local };
    delete updated[key];
    setLocal(updated);
  }

  async function addField() {
    const parsed = parseValue(newValue);

    const updated = { ...local, [newField]: parsed };
    setLocal(updated);

    await fetch(`/api/collections/${col}/${doc._id}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [newField]: parsed }),
    });

    setNewField("");
    setNewValue("");
  }

  return (
    <table
      style={{
        borderCollapse: "collapse",
        marginBottom: 20,
        width: "100%",
        background: "#fafafa",
      }}
    >
      <tbody>
        {Object.entries(local).map(([key, value]) => (
          <tr key={key}>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>{key}</td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>
              {editing ? (
                <input
                  style={{ width: "100%" }}
                  defaultValue={JSON.stringify(value)}
                  onChange={(e) =>
                    setLocal({
                      ...local,
                      [key]: parseValue(e.target.value),
                    })
                  }
                />
              ) : (
                JSON.stringify(value)
              )}
            </td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>
              <button onClick={() => deleteField(key)}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan={3} style={{ padding: 8 }}>
            {editing ? (
              <button onClick={save}>保存</button>
            ) : (
              <button onClick={() => setEditing(true)}>編集</button>
            )}
          </td>
        </tr>

        <tr>
          <td colSpan={3} style={{ padding: 8 }}>
            <input
              placeholder="新しいフィールド名"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
            />
            <input
              placeholder="値"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <button onClick={addField}>追加</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

function parseValue(v: string) {
  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
}
