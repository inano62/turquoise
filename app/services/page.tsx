export default function ServicesPage() {
    return (
        <section className="min-h-screen bg-gray-950 text-gray-100 px-8 py-24">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* --- Thought Section --- */}
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[5%] p-10 shadow-xl shadow-black/40">
                    <h1 className="text-4xl font-bold tracking-wide mb-6">
                        PLASMIC ― 科学で未来を形づくる会社
                    </h1>

                    <p className="text-lg leading-relaxed text-gray-300 mb-4">
                        私たち PLASMIC は、<span className="text-white font-semibold">PLASMA</span> のように
                        常に最先端を走り、<span className="text-white font-semibold">ION</span> のように
                        世界の構造そのものを組み替える技術集団です。
                    </p>

                    <p className="text-lg leading-relaxed text-gray-300 mb-4">
                        圧倒的な科学力とエンジニアリングで、企業が抱える複雑な課題を再構築します。
                        私たちの使命は、御社の未来を “再設計” することです。
                    </p>

                    <p className="text-lg leading-relaxed text-gray-300">
                        PLASMIC は、UI/UX、業務システム、AI、自動化、データ連携など、
                        あらゆる領域を横断し、技術を “流体” のように扱います。
                    </p>
                </div>

                {/* --- Services Section --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[1,2,3].map((i) => (
                        <div
                            key={i}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[3%] p-8 shadow-lg shadow-black/30 hover:bg-white/10 transition"
                        >
                            <h3 className="text-xl font-semibold mb-3">Service {i}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                未来を構築するための技術ソリューションを提供します。
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
