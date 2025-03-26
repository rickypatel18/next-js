"use client";

import Link from "next/link";

const cards = [
  {
    id: "1",
    name: "image 1 ",
    desc: "one Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt eveniet nihil quisquam esse minima, odit libero pariatur. Laudantium accusantium aspernatur illo accusamus commodi nihil sequi veritatis quos et tenetur.",
  },
  {
    id: "2",
    name: "image 2",
    desc: "one Lorem ipsum dolor sit amet consectet odit libero pariatur. Laudantium accusantium aspernatur illo accusamus commodi nihil sequi veritatis quos et tenetur.",
  },
  {
    id: "3",
    name: "image 3",
    desc: "one Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt eveniet nihil quisquam esse minima, odit libero pariatur. Laudantium accusantium aspernatur illo accusamus s quos et tenetur.",
  },
];

export default function ProductListingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cards</h1>
      <ul className="space-y-4">
        {cards.map((card) => (
          <li key={card.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{card.name}</h2>
            <p className="text-gray-600">{card.desc}</p>
            <Link
              href={`/cards/${card.id}`}
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
