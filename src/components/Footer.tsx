import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 bg-gray-50 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-2">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            이용약관
          </a>
          <a href="#" className="hover:underline">
            개인정보처리방침
          </a>
          <a href="#" className="hover:underline">
            1:1문의
          </a>
        </div>
        <div>ⓒ 2024 MyShop | 서울시 어디구 어디로 123</div>
      </div>
    </footer>
  );
}
