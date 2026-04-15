export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <div className="h-6 w-40 bg-gray-300 animate-pulse rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-24 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-24 bg-gray-300 animate-pulse rounded"></div>
      </div>
    </div>
  )
}