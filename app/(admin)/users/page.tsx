export default function UsersPage() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-gray-600 text-2xl mt-2">1,234</p>
        </div>

        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="font-semibold">Monthly Revenue</h3>
          <p className="text-gray-600 text-2xl mt-2">$12,340</p>
        </div>
      </div>
    </div>
  )
}