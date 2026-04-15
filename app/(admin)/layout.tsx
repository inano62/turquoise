export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🟦</span>
          <h1 className="text-xl font-bold">Turquoise Admin</h1>
        </div>

        <nav className="flex gap-6 text-white/90 font-medium">
          <a href="/dashboard" className="hover:text-white">Dashboard</a>
          <a href="/users" className="hover:text-white">Users</a>
          <a href="/dashboard/settings" className="hover:text-white">Settings</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
