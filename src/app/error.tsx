"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-6">
      <h1 className="text-3xl font-bold">Oops! Something went wrong 😢</h1>
      <p className="mt-4">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Retry
      </button>
    </div>
  );
}


// when there is syntax error in code