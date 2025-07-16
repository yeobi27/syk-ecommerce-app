import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { User } from "@/types/user";
import type { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "이메일", type: "email", placeholder: "test@test.com" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
        const user = stmt.get(credentials?.email) as User | undefined;
        if (
          user &&
          typeof user.id === "string" &&
          typeof user.password === "string" &&
          bcrypt.compareSync(credentials!.password, user.password)
        ) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: Boolean(user.isAdmin),
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
