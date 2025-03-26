"use client";

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button className="flex w-fit p-4 rounded-2xl bg-[var(--black)]" onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
