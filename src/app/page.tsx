"use client";
import Button from "@/components/button/Button";
import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy load the HeavyComponent (loads only when needed)
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function HomePage() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-3xl">Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <Button />
      <button
        onClick={() => setShowComponent(!showComponent)}
        className="bg-blue-500 text-white px-4 py-2 w-fit rounded"
      >
        {
          showComponent ? "Hide Heavy Component" : "Show Heavy Component"
        }
      </button>

      {showComponent && <HeavyComponent />}
    </main>
  );
}
