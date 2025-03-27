"use client";
import styles from "./Button.module.css"

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button className={styles.primary} onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
