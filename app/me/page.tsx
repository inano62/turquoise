"use client";

import { useEffect, useState } from "react";

export default function MePage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Me</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
