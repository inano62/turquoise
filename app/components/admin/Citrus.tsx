'use client'
import { useEffect, useState } from "react";

export default function Citrus() {
  type Users = {
    _id:string;
    email:string;
    role:boolean;
  }
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch("/api/citrus")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
console.log(users);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ユーザー管理</h2>

    </div>
  );
}