"use client";

import { useState } from "react";
import Layout from "../../components/Layout";

// 예시 사용자 데이터
const mockUser = {
  id: "12345",
  username: "Woong",
  discriminator: "2705",
  avatar: "",
  status: "online" as const,
  servers: [
    {
      name: "Bannerload",
      roles: ["Majordomo", "Admin", "Member"],
    },
  ],
  nickname: "Woong",
};

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(mockUser);

  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Layout pageTitle="홈페이지 영역" user={isLoggedIn ? user : undefined}>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            background: "#32353b",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>
            Aimdot.dev - Discord Bot Platform
          </h2>
          <p
            style={{
              color: "#b9bbbe",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            디스코드 봇 개발을 위한 완전한 플랫폼입니다.
            <br />
            강력한 도구와 직관적인 인터페이스로 누구나 쉽게 봇을 만들 수
            있습니다.
          </p>

          {/* 로그인 상태 토글 버튼 (데모용) */}
          <button
            onClick={toggleLoginState}
            style={{
              background: "#5865f2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 16px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {isLoggedIn ? "로그아웃 (데모)" : "로그인 (데모)"}
          </button>
        </div>

        {/* 주요 기능 카드들 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#32353b",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🤖</div>
            <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
              봇 개발 도구
            </h3>
            <p
              style={{ color: "#b9bbbe", fontSize: "14px", lineHeight: "1.5" }}
            >
              코딩 지식 없이도 디스코드 봇을 쉽게 제작할 수 있는 비주얼 에디터와
              강력한 개발 도구를 제공합니다.
            </p>
          </div>

          <div
            style={{
              background: "#32353b",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>⚡</div>
            <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
              고성능 호스팅
            </h3>
            <p
              style={{ color: "#b9bbbe", fontSize: "14px", lineHeight: "1.5" }}
            >
              24/7 안정적인 봇 호스팅 서비스로 언제나 온라인 상태를 유지할 수
              있습니다.
            </p>
          </div>

          <div
            style={{
              background: "#32353b",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔧</div>
            <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
              커스터마이징
            </h3>
            <p
              style={{ color: "#b9bbbe", fontSize: "14px", lineHeight: "1.5" }}
            >
              다양한 플러그인과 확장 기능으로 원하는 대로 봇을 커스터마이징할 수
              있습니다.
            </p>
          </div>

          <div
            style={{
              background: "#32353b",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>📊</div>
            <h3 style={{ color: "#ffffff", marginBottom: "8px" }}>
              분석 대시보드
            </h3>
            <p
              style={{ color: "#b9bbbe", fontSize: "14px", lineHeight: "1.5" }}
            >
              실시간 봇 사용량과 성능 데이터를 한눈에 확인할 수 있는 대시보드를
              제공합니다.
            </p>
          </div>
        </div>

        {/* 프로젝트 지침 */}
        <div
          style={{
            background: "#32353b",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <h3 style={{ color: "#ffffff", marginBottom: "16px" }}>
            🏗️ 프로젝트 아키텍처 지침
          </h3>
          <div
            style={{
              background: "#40444b",
              borderRadius: "6px",
              padding: "16px",
              marginBottom: "12px",
            }}
          >
            <h4 style={{ color: "#5865f2", marginBottom: "8px" }}>
              독립적 페이지 구조
            </h4>
            <p
              style={{
                color: "#dcddde",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              로딩/메인 페이지를 제외한 모든 페이지는 독립적 형태를 지닙니다
            </p>
            <ul
              style={{
                color: "#b9bbbe",
                fontSize: "14px",
                lineHeight: "1.6",
                paddingLeft: "20px",
              }}
            >
              <li>
                각 페이지는 자체적으로 완전한 기능을 수행할 수 있어야 합니다
              </li>
              <li>
                페이지 간 의존성을 최소화하여 독립적인 개발 및 유지보수가
                가능합니다
              </li>
              <li>모듈화된 구조로 확장성과 재사용성을 극대화합니다</li>
              <li>
                각 페이지는 자체 스타일과 스크립트를 포함하여 완전히 독립적으로
                작동합니다
              </li>
            </ul>
          </div>
        </div>

        {/* 현재 로그인 상태 표시 */}
        <div
          style={{
            background: isLoggedIn ? "#2d7d32" : "#d32f2f",
            borderRadius: "8px",
            padding: "16px",
            marginTop: "20px",
          }}
        >
          <h4 style={{ color: "#ffffff", marginBottom: "8px" }}>
            {isLoggedIn ? "✅ 로그인 상태" : "❌ 로그아웃 상태"}
          </h4>
          <p style={{ color: "#ffffff", fontSize: "14px" }}>
            {isLoggedIn
              ? "현재 Discord 계정으로 로그인되어 있습니다. 좌측 사이드바에서 프로필 정보를 확인할 수 있습니다."
              : "Discord 계정으로 로그인하면 서버 정보와 역할을 확인할 수 있습니다."}
          </p>
        </div>
      </div>
    </Layout>
  );
}
