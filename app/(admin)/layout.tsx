export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow fixed h-full p-4">
        <h2 className="text-xl font-bold mb-4">Admin</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block">Dashboard</a>
          <a href="/users" className="block">Users</a>
          <a href="/posts" className="block">Posts</a>
        </nav>
      </aside>

      <main className="ml-64 p-6">
        {children}
      </main>
    </div>
  )
}