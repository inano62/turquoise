export default function Hero() {
    return (
        <section className="w-full bg-gray-900 text-white py-24 px-6 text-center">
            <h1 className="text-4xl font-bold mb-4 tracking-wide">
                PLASMIC
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                テクノロジーとデザインで、未来の業務体験を創造する会社です。
            </p>

            <div className="flex justify-center gap-4">
                <a
                    href="/services"
                    className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow font-semibold"
                >
                    事業紹介
                </a>
                <a
                    href="/contact"
                    className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow font-semibold"
                >
                    お問い合わせ
                </a>
            </div>
        </section>
    );
}
