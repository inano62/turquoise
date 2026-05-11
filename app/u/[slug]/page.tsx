import { getDB } from "@/api/db";
import { cookies } from "next/headers";
import {resolve} from "node:dns";


export default async function Page({ params }: { params:Promise<{ slug: string }> }) {
  const db = await getDB();
  const { slug } = await params;
  // ① slug からユーザーを取得
const user = await db.collection("users").findOne({
  "profile.homepageSlug": slug
}) || await db.collection("users").findOne({
  email:  decodeURIComponent(slug)
});

    if (!user) {
        const resolved = await params; 

        return (
            <div className="p-10 text-red-600">
                ユーザーが見つかりません
                <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(resolved, null, 2)}
        </pre>
            </div>
        );
    }

  // ② このユーザーの投稿を取得
  const posts = await db
    .collection("playground")
    .find({ userId: user._id.toString() })
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <main className="p-10 max-w-3xl mx-auto space-y-8">
      {/* プロフィール */}
      <section>
        <h1 className="text-3xl font-bold">{user.profile?.displayName ?? "名無し"}</h1>
        <p className="text-gray-600 mt-2">{user.profile?.bio ?? "自己紹介はまだありません"}</p>
      </section>
<pre className="bg-gray-100 p-4 rounded">
  {JSON.stringify(user, null, 2)}
</pre>
      {/* 投稿一覧 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">投稿一覧</h2>

        {posts.length === 0 && (
          <p className="text-gray-500">まだ投稿がありません</p>
        )}

        {posts.map((post: any) => (
          <div
            key={post._id}
            className="border p-4 rounded-xl bg-white shadow-sm space-y-2"
          >
            {post.title && (
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>
            )}

            <p className="text-gray-700 whitespace-pre-wrap">{post.text}</p>

            <div className="text-xs text-gray-400">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}