import { PlaygroundForm } from "@/components/playground/components/PlaygroundFrom";
import { PlaygroundList } from "@/components/playground/components/PlaygroundList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-900 to-cyan-800 p-10">
      <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800">
          Playground
        </h1>

        <p className="mt-2 text-gray-500">
          API → DB → UI の実験場
        </p>


        <div className="mt-10">
          <PlaygroundList />
        </div>
      </div>
    </main>
  );
}