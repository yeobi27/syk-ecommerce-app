export interface OrderItem {
  productId: string;
  quantity: number;
  price: number; // 주문 시점의 상품 가격 (이력 보존용)
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  createdAt: string; // ISO8601 형식 예: "2025-07-16T10:30:00Z"
  status: "pending" | "paid" | "cancelled";
  shippingAddress?: string;
}
