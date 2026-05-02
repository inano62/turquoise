"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfileSettings() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("token");

      // ★ token が無い → ログインしてない → リダイレクト
      if (!token) {
        router.push("/login");
        return;
      }

      // ★ token がある → payload を読む
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload.userId;

      const res = await fetch(`/api/users/${userId}`);
      const data = await res.json();

      setDisplayName(data.profile?.displayName ?? "");
      setBio(data.profile?.bio ?? "");
    }

    load();
  }, [router]);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">プロフィール編集</h1>

      <div className="space-y-4">
        <input
          className="border px-3 py-2 rounded w-full"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="表示名"
        />

        <textarea
          className="border px-3 py-2 rounded w-full"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="自己紹介"
        />
      </div>
    </main>
  );
}