"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const signup = async () => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMsg(data.ok ? "アカウント作成成功！" : "失敗したよ…");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

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
            onClick={signup}
            className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-blue-600">{msg}</p>
        </div>
      </div>
    </div>
  );
}