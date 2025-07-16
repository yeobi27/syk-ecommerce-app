import React from "react";
import Image from "next/image";

const categories = [
  { title: "가구&인테리어", image: "/images/cat1.jpg" },
  { title: "요리도구", image: "/images/cat2.jpg" },
  { title: "가전제품", image: "/images/cat3.jpg" },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="text-xl font-bold mb-4">카테고리별 추천</h2>
      <div className="flex gap-6 overflow-x-auto">
        {categories.map((c) => (
          <div
            key={c.title}
            className="w-48 shrink-0 bg-white rounded-xl shadow p-2 flex flex-col items-center hover:shadow-lg transition"
          >
            <Image
              src={c.image}
              alt={c.title}
              width={96}
              height={96}
              className="w-24 h-24 object-cover mb-2 rounded-lg"
            />
            <div className="text-center font-medium">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
