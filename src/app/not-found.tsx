import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Go to Home
      </Link>
    </main>
  );
}

// when page not found
