"use client"

import { notFound } from "next/navigation";

const products = [
  {
    id: "1",
    name: "Laptop",
    price: "$1200",
    description: "A powerful laptop.",
  },
  {
    id: "2",
    name: "Smartphone",
    price: "$800",
    description: "A high-end smartphone.",
  },
  {
    id: "3",
    name: "Headphones",
    price: "$150",
    description: "Noise-canceling headphones.",
  },
];

export default  function ProductDetailPage({ params }: { params: { id: string } }) {
  // here no need of async await
  // const productId = params.id;
  // if (!productId) return notFound();

  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </main>
  );
}
