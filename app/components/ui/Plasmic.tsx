
export function Plasmic() {
  return (
    <header className="w-full bg-indigo-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Plasmic</h1>

        <nav className="flex gap-6 text-sm">
          <a href="/plasmic" className="hover:underline">ダッシュボード</a>
          <a href="/plasmic/billing" className="hover:underline">契約・請求</a>
          <a href="/plasmic/stores" className="hover:underline">店舗管理</a>
          <a href="/plasmic/settings" className="hover:underline">設定</a>
        </nav>
      </div>
    </header>
  );
}