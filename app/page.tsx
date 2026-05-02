export default function Page() {
  return (
      <main className="min-h-screen bg-gradient-to-br from-teal-900 to-cyan-800 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-xl">
          <h1 className="text-3xl font-semibold text-gray-800">
            Turquoise Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Calm. Structured. Precise.
          </p>

          <button className="mt-6 px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium transition focus:ring-4 focus:ring-pink-300">
            Continue
          </button>
        </div>
      </main>
  )
}
