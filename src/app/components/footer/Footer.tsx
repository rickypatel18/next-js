"use client";

export default function Footer() {
  return (
    <footer className=" text-center bg-[var(--black)] p-4">
      <p>© {new Date().getFullYear()} My Next.js App. All Rights Reserved.</p>
    </footer>
  );
}
