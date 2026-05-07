import { useEffect, useState } from "react";

export default function LogViewer() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/api/admin/logs")
      .then((res) => res.json())
      .then((data) => setLogs(data.logs));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ログ</h2>

      <div className="bg-black text-green-400 p-4 rounded h-96 overflow-auto font-mono text-sm">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}