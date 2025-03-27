"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy load HeavyComponent (only loads when clicked)
const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>

      <button
        onClick={() => setShowComponent(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load Component
      </button>

      {showComponent && <HeavyComponent />}
    </div>
  );
}
