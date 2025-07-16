import Database from "better-sqlite3";
import path from "path";

// 프로젝트 루트에 db.sqlite3 생성
const dbFile = path.join(process.cwd(), "db.sqlite3");
const db = new Database(dbFile);

// users 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    isAdmin INTEGER DEFAULT 0
  );
`);

// products 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    imageUrl TEXT NOT NULL,
    description TEXT,
    stock INTEGER NOT NULL,
    -- 카테고리: 카테고리 id 여러개면 콤마로 저장(임시)
    categories TEXT
  );
`);

// orders 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    items TEXT NOT NULL,         -- JSON string
    total REAL NOT NULL,
    createdAt TEXT NOT NULL,
    status TEXT NOT NULL,
    address TEXT NOT NULL,
    couponId TEXT
  );
`);

// carts 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS carts (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    items TEXT NOT NULL,         -- JSON string
    updatedAt TEXT NOT NULL
  );
`);

// reviews 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS reviews (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    productId TEXT NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    createdAt TEXT NOT NULL
  );
`);

// coupons 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS coupons (
    id TEXT PRIMARY KEY,
    code TEXT NOT NULL,
    discountType TEXT NOT NULL,
    discountValue REAL NOT NULL,
    expiresAt TEXT NOT NULL,
    minimumAmount REAL,
    usageCount INTEGER NOT NULL,
    maxUsage INTEGER
  );
`);

// wishlists 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS wishlists (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    productIds TEXT NOT NULL,    -- JSON string (array)
    updatedAt TEXT NOT NULL
  );
`);

// categories 테이블
db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    parentId TEXT
  );
`);

export default db;
