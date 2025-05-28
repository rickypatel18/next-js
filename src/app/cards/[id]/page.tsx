"use client";

import { notFound } from "next/navigation";

const cards = [
  {
    id: "image1",
    name: "image 1",
    desc: "one Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt eveniet nihil quisquam esse minima, odit libero pariatur. Laudantium accusantium aspernatur illo accusamus commodi nihil sequi veritatis quos et tenetur.",
  },
  {
    id: "image2",
    name: "image 2",
    desc: "one Lorem ipsum dolor sit amet consectet odit libero pariatur. Laudantium accusantium aspernatur illo accusamus commodi nihil sequi veritatis quos et tenetur.",
  },
  {
    id: "image3",
    name: "image 3",
    desc: "one Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt eveniet nihil quisquam esse minima, odit libero pariatur. Laudantium accusantium aspernatur illo accusamus s quos et tenetur.",
  },
];

export default function CardDetailPage({ params }: { params: { id: string } }) {
  const card = cards.find((c) => c.id === params.id);
  if (!card) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{card.name}</h1>
      <p className="text-gray-600">{card.desc}</p>
    </main>
  );
}
