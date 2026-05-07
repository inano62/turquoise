"use client"

import { useState } from "react"
import Dashboard from "@/components/admin/Dashboard"

export default function DashboardPage() {
  const [view, setView] = useState("users")

  return (
    <div className="flex">
      <main className="flex-1 p-6">
        <Dashboard/>
      </main>
    </div>
  )
}