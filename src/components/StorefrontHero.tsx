import React from "react";

export default function StorefrontHero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shop The Latest Trends
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          새로운 계절, 새로운 스타일.
          <br /> 트렌디한 상품들을 지금 만나보세요.
        </p>
        <a
          href="/products"
          className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition"
        >
          쇼핑하러 가기
        </a>
      </div>
    </section>
  );
}
