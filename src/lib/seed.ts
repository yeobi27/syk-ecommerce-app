import db from "./db";
import { v4 as uuidv4 } from "uuid"; // npm install uuid

// 1. 유저 더미
const users = [
  {
    id: uuidv4(),
    email: "admin@test.com",
    password: "hashedpassword", // 실제론 bcrypt 해시 필요
    name: "관리자",
    isAdmin: 1,
  },
  {
    id: uuidv4(),
    email: "user1@test.com",
    password: "hashedpassword",
    name: "홍길동",
    isAdmin: 0,
  },
];

// 2. 카테고리 더미
const categories = [
  { id: uuidv4(), name: "스마트폰", description: "", parentId: null },
  { id: uuidv4(), name: "노트북", description: "", parentId: null },
];

// 3. 상품 더미
const products = [
  {
    id: uuidv4(),
    name: "Galaxy S24",
    price: 1200000,
    imageUrl: "/images/galaxyS24.jpg",
    description: "최신 갤럭시 플래그십 스마트폰",
    stock: 50,
    categories: JSON.stringify([categories[0].id]),
  },
  {
    id: uuidv4(),
    name: "Macbook Air M2",
    price: 1500000,
    imageUrl: "/images/macbookair.jpg",
    description: "애플 실리콘 Macbook",
    stock: 20,
    categories: JSON.stringify([categories[1].id]),
  },
];

// 4. 쿠폰 더미
const coupons = [
  {
    id: uuidv4(),
    code: "WELCOME10",
    discountType: "percent",
    discountValue: 10,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(), // 30일 후 만료
    minimumAmount: 100000,
    usageCount: 0,
    maxUsage: 100,
  },
];

// **초기화 (테이블 클리어)**
db.prepare("DELETE FROM users").run();
db.prepare("DELETE FROM categories").run();
db.prepare("DELETE FROM products").run();
db.prepare("DELETE FROM coupons").run();

// **샘플 데이터 삽입**
const userStmt = db.prepare(
  "INSERT INTO users (id, email, password, name, isAdmin) VALUES (?, ?, ?, ?, ?)"
);
users.forEach((u) =>
  userStmt.run(u.id, u.email, u.password, u.name, u.isAdmin)
);

const categoryStmt = db.prepare(
  "INSERT INTO categories (id, name, description, parentId) VALUES (?, ?, ?, ?)"
);
categories.forEach((c) =>
  categoryStmt.run(c.id, c.name, c.description, c.parentId)
);

const productStmt = db.prepare(
  "INSERT INTO products (id, name, price, imageUrl, description, stock, categories) VALUES (?, ?, ?, ?, ?, ?, ?)"
);
products.forEach((p) =>
  productStmt.run(
    p.id,
    p.name,
    p.price,
    p.imageUrl,
    p.description,
    p.stock,
    p.categories
  )
);

const couponStmt = db.prepare(
  "INSERT INTO coupons (id, code, discountType, discountValue, expiresAt, minimumAmount, usageCount, maxUsage) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);
coupons.forEach((c) =>
  couponStmt.run(
    c.id,
    c.code,
    c.discountType,
    c.discountValue,
    c.expiresAt,
    c.minimumAmount,
    c.usageCount,
    c.maxUsage
  )
);

console.log("DB seed 완료!");
process.exit(0);
