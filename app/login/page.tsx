"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data.ok) {
      setMsg("ログイン失敗…");
      return;
    }

    router.push(`/u/${data.slug}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded w-full focus:ring focus:ring-blue-300"
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded w-full focus:ring focus:ring-blue-300"
          />

          <button
            onClick={login}
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>

          <p className="text-center text-red-500">{msg}</p>
        </div>
      </div>
    </div>
  );
}