"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setStatus(res.ok ? "送信しました！" : "送信に失敗しました");
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="お名前" className="w-full border p-2" required />
        <input name="email" placeholder="メールアドレス" className="w-full border p-2" required />
        <textarea name="message" placeholder="お問い合わせ内容" className="w-full border p-2 h-40" required />
        <button className="bg-black text-white px-4 py-2 rounded">送信</button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}