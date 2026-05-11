export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Plasmic ダッシュボード
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 契約状況 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">契約状況</h2>
          <p className="text-gray-700 mb-2">プラン: Pro</p>
          <p className="text-gray-700 mb-2">次回請求日: 2026/06/01</p>
          <a
            href="/plasmic/billing"
            className="text-indigo-600 font-semibold hover:underline"
          >
            請求管理へ
          </a>
        </section>

        {/* 店舗管理 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">店舗管理</h2>
          <p className="text-gray-700 mb-2">登録店舗数: 1</p>
          <p className="text-gray-700 mb-2">ステータス: 有効</p>
          <a
            href="/plasmic/stores"
            className="text-indigo-600 font-semibold hover:underline"
          >
            店舗一覧へ
          </a>
        </section>

        {/* 設定 */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">設定</h2>
          <p className="text-gray-700 mb-2">メール: owner@example.com</p>
          <a
            href="/plasmic/settings"
            className="text-indigo-600 font-semibold hover:underline"
          >
            設定画面へ
          </a>
        </section>

      </div>

      {/* 下段：アクティビティログ */}
      <section className="bg-white p-6 rounded-xl shadow mt-10">
        <h2 className="text-xl font-semibold mb-4">最近のアクティビティ</h2>
        <ul className="text-gray-700 space-y-2">
          <li>・2026/05/10 — プランを Pro に更新</li>
          <li>・2026/05/08 — 店舗「いけだいなサロン」を登録</li>
          <li>・2026/05/01 — 初回契約を開始</li>
        </ul>
      </section>
    </main>
  );
}