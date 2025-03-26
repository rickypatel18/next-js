"use client"

import Link from "next/link";

const products = [
  { id: "1", name: "Laptop", price: "$1200" },
  { id: "2", name: "Smartphone", price: "$800" },
  { id: "3", name: "Headphones", price: "$150" },
];

export default function ProductListingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Link
              href={`/product/${product.id}/${product.name}/${product.price}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
