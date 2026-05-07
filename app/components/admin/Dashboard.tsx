"use client"

import { useEffect, useState } from "react"

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    questions: 0,
    accessToday: 0,
    errors: 0
  })

  const [recentLogs, setRecentLogs] = useState([])
  const [recentQuestions, setRecentQuestions] = useState([])

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats)
        setRecentLogs(data.recentLogs)
        setRecentQuestions(data.recentQuestions)
      })
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card title="ユーザー数" value={stats.users} />
        <Card title="過去問数" value={stats.questions} />
        <Card title="今日のアクセス" value={stats.accessToday} />
        <Card title="エラー" value={stats.errors} />
      </div>

      {/* Recent Logs */}
      <section className="mb-8">
        <h3 className="text-xl font-bold mb-2">最近のログ</h3>
        <div className="bg-black text-green-400 p-4 rounded h-40 overflow-auto text-sm font-mono">
          {recentLogs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </section>

      {/* Recent Questions */}
      <section>
        <h3 className="text-xl font-bold mb-2">最近追加された過去問</h3>
        <ul className="border rounded divide-y">
          {recentQuestions.map((q) => (
            <li key={q._id} className="p-3 flex justify-between">
              <span>{q.title}</span>
              <span className="text-gray-500">{q.createdAt}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Card({ title, value }:any) {
  return (
    <div className="bg-white shadow p-4 rounded text-center">
      <div className="text-gray-500">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  )
}