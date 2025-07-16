export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  stock: number;
  categoryIds: string[]; // 소속 카테고리 ID
}
