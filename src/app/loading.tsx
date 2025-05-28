export default function GlobalLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="ml-4 text-lg text-red-700">Loading...</p>
    </div>
  );
}

// when page takes time to load