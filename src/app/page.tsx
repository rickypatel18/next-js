"use client";
import Button from "@/components/button/Button";
import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy load the HeavyComponent (loads only when needed)
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>Loading...</p>, // Show loading text until component loads
  ssr: false, // Disables SSR (renders only on the client)
});

export default function HomePage() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-3xl">Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <Button />
      <button
        onClick={() => setShowComponent(true)}
        className="bg-blue-500 text-white px-4 py-2 w-fit rounded"
      >
        Load Component
      </button>

      {showComponent && <HeavyComponent />}
    </main>
  );
}
