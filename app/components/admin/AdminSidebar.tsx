export default function AdminSidebar({ current, onChange }:any) {
  const menu = [
    { key: "users", label: "ユーザー管理" },
    { key: "questions", label: "過去問管理" },
    { key: "logs", label: "ログ" },
    { key: "settings", label: "設定" }
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`text-left px-3 py-2 rounded ${
              current === item.key ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}