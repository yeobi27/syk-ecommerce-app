import React from "react";
const tabs = [
  "홈",
  "오늘끝딜",
  "FOR YOU",
  "여름특가",
  "베스트",
  "N배송",
  "패션뷰티",
  "오늘행사",
];

export default function Header() {
  return (
    <header className="w-full border-b sticky top-0 bg-white z-10">
      {/* 1. 로고/서치/유저메뉴 */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-xl text-blue-700">MyShop</div>
        <div className="flex-1 mx-4 max-w-lg">
          <input
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="제품, 브랜드, 카테고리 검색"
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="hover:underline">로그인</button>
          <button className="relative hover:underline">
            장바구니
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <button className="hover:underline">메뉴</button>
        </div>
      </div>
      {/* 2. 탭: 로고 max-w와 동일, 바로 아래 라인 */}
      <nav>
        <div className="max-w-7xl mx-auto flex gap-6 py-2 justify-center">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="text-gray-700 cursor-pointer font-medium whitespace-nowrap hover:text-blue-600 px-2"
            >
              {tab}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
