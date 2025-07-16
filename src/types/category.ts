export interface Category {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string; // 카테고리 대표 이미지 (선택)
  parentId?: string; // 대분류-소분류 구분 (선택)
}
