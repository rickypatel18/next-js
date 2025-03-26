"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  //   console.log("Search Params:", Object.fromEntries(searchParams.entries())); // Debugging

  const query = searchParams.get("query")?.trim().toLowerCase() || "";

  const products = [
    { id: "1", name: "Laptop", price: "$1200" },    
    { id: "2", name: "Smartphone", price: "$800" },
    { id: "3", name: "Headphones", price: "$150" },
  ];

  const filteredProducts = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : [];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Search Results</h1>

      {query ? (
        filteredProducts.length > 0 ? (
          <>
            <p className="mt-4 text-lg">
              Showing results for: <strong>{query}</strong>
            </p>
            <ul className="mt-6 space-y-4">
              {filteredProducts.map((product) => (
                <li key={product.id} className="border p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.price}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-500 mt-4">No products found.</p>
        )
      ) : (
        <p className="mt-4 text-lg text-gray-500">No search query provided.</p>
      )}
    </main>
  );
}
