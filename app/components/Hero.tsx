export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-lime-300 to-emerald-400 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Citrus — あなたの街のサービスをもっと身近に
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        近くのプロバイダーを探して、予約して、つながる。
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/services"
          className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow font-semibold"
        >
          サービスを見る
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow font-semibold"
        >
          ログイン
        </a>
      </div>
    </section>
  );
}