import React from "react";

const themes = [
  { text: "나를 위한 선물", products: [1, 2, 3] },
  { text: "즐거움을 더하는 새로운 발견", products: [4, 5, 6] },
];

export default function ThemeSection() {
  return (
    <>
      {themes.map((theme, idx) => (
        <section key={idx} className="max-w-7xl mx-auto px-4 mt-10">
          <h3 className="text-lg font-semibold mb-2">{theme.text}</h3>
          <div className="flex gap-4">
            {theme.products.map((_, i) => (
              <div
                key={i}
                className="w-40 h-56 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
              >
                상품 예시
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
