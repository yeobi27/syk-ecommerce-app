"use client";
import React from "react";
import Image from "next/image";

const banners = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

export default function BannerSlider() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % banners.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
      <Image
        src={banners[index]}
        alt="배너"
        width={800}
        height={192}
        className="object-cover w-full h-full transition-all duration-500"
        priority
        draggable={false}
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
