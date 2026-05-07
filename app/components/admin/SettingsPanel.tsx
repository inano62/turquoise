export default function SettingsPanel() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">設定</h2>

      <label className="block mb-2">
        サイト名
        <input className="border p-2 w-full" defaultValue="Turquoise" />
      </label>

      <label className="block mb-2">
        メンテナンスモード
        <select className="border p-2 w-full">
          <option value="off">OFF</option>
          <option value="on">ON</option>
        </select>
      </label>

      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        保存
      </button>
    </div>
  );
}