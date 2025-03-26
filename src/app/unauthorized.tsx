import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">403</h1>
      <p className="text-lg text-gray-600 mt-2">
        You are not authorized to access this page.
      </p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </main>
  );
}

// when user is not authorized
