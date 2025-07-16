export interface Wishlist {
  id: string;
  userId: string;
  productIds: string[]; // 찜한 상품 목록
  updatedAt: string; // ISO8601
}
