export default function ToolLoading() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb skeleton */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header skeleton */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-2xl animate-pulse" />
          <div className="h-8 w-64 mx-auto bg-gray-200 rounded animate-pulse mb-3" />
          <div className="h-5 w-96 mx-auto bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Calculator card skeleton */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>

          <div className="h-12 w-32 bg-teal-200 rounded-xl animate-pulse" />
        </div>

        {/* FAQ skeleton */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="h-6 w-56 bg-gray-200 rounded animate-pulse mb-6" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-b border-gray-100 last:border-0 py-4">
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
