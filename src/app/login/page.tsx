"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession();

  // 로그인폼 상태
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) setError("로그인 실패: " + res.error);
    if (res?.ok) window.location.href = "/";
  };

  if (session) {
    return (
      <div
        style={{
          maxWidth: 350,
          margin: "40px auto",
          padding: 24,
          boxShadow: "0 0 12px #ccc",
          borderRadius: 8,
        }}
      >
        <h2>환영합니다, {session.user?.name || session.user?.email}님!</h2>
        <p style={{ margin: "14px 0" }}>이메일: {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          style={{
            width: "100%",
            padding: 8,
            background: "#ff5c5c",
            color: "#fff",
            borderRadius: 4,
          }}
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "40px auto",
        padding: 24,
        boxShadow: "0 0 12px #ccc",
        borderRadius: 8,
      }}
    >
      <h2 style={{ marginBottom: 20 }}>로그인</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 8,
            background: "#333",
            color: "#fff",
            borderRadius: 4,
          }}
        >
          이메일 로그인
        </button>
      </form>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

      <div style={{ textAlign: "center", margin: "18px 0 6px 0" }}>또는</div>
      <button
        style={{
          width: "100%",
          marginBottom: 8,
          padding: 8,
          background: "#4285F4",
          color: "#fff",
          borderRadius: 4,
        }}
        onClick={() => signIn("google")}
      >
        Google로 로그인
      </button>
      <button
        style={{
          width: "100%",
          marginBottom: 8,
          padding: 8,
          background: "#2DB400",
          color: "#fff",
          borderRadius: 4,
        }}
        onClick={() => signIn("naver")}
      >
        Naver로 로그인
      </button>
      <button
        style={{
          width: "100%",
          marginBottom: 8,
          padding: 8,
          background: "#F7E600",
          color: "#191919",
          borderRadius: 4,
        }}
        onClick={() => signIn("kakao")}
      >
        Kakao로 로그인
      </button>
    </div>
  );
}
