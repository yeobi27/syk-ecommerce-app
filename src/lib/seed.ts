import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
};
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  stock: number;
};

export const defaultUsers: User[] = [
  {
    id: "admin-001",
    email: "admin@demo.com",
    password: "hashed-password", // bcrypt 해시로 저장 필요
    name: "관리자",
    isAdmin: true,
  },
];

export const defaultProducts: Product[] = [
  {
    id: "p-001",
    name: "샘플 상품1",
    price: 12000,
    imageUrl: "/sample1.jpg",
    description: "테스트 상품입니다.",
    stock: 10,
  },
];
