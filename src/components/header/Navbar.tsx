"use client";

import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";

export default function Navbar() {
  return (
    <nav className="flex bg-black justify-center items-center gap-20 ">
      <div className="flex gap-10 p-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/product">Product</Link>
        <Link href="/cards">Cards</Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
}
