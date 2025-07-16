export interface User {
  id: string;
  email: string;
  password: string; // 해시된 비밀번호
  name: string;
  isAdmin: boolean;
}
