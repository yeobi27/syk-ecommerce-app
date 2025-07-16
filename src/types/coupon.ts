export interface Coupon {
  id: string;
  code: string;
  discountType: "percent" | "amount";
  discountValue: number;
  expiresAt: string; // ISO date
  minimumAmount?: number; // 최소 주문 금액(선택)
  usageCount: number; // 사용 횟수
  maxUsage?: number; // 최대 사용 가능 횟수(선택)
}
