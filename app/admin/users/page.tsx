"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) setUsers(data.users);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>
      <ul>
        {users.map((u: any) => (
          <li key={u._id}>
            {u.email}（{u.createdAt}）
          </li>
        ))}
      </ul>
    </div>
  );
}
