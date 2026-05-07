"use client"

import { useState } from "react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import UserList from "@/components/admin/UserList"
import QuestionList from "@/components/admin/QuestionList"
import LogViewer from "@/components/admin/LogViewer"
import SettingsPanel from "@/components/admin/SettingsPanel"

export default function AdminPage() {
  const [view, setView] = useState("users")

  return (
    <div className="flex">
      <AdminSidebar current={view} onChange={setView} />

      <main className="flex-1 p-6">
        {view === "users" && <UserList />}
        {view === "questions" && <QuestionList />}
        {view === "logs" && <LogViewer />}
        {view === "settings" && <SettingsPanel />}
      </main>
    </div>
  )
}