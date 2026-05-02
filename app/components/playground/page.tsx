import { PlaygroundForm } from "./components/PlaygroundFrom";
import { PlaygroundList } from "./components/PlaygroundList";

export default function PlaygroundPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Playground</h1>

      <PlaygroundList />
    </div>
  );
}