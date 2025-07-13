"use client";

import { useEffect } from "react";
import styles from "./main.module.css";

export default function MainPage() {
  useEffect(() => {
    // 메인 페이지 전용 body 스타일 적용
    document.body.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    document.body.style.minHeight = "100vh";
    document.body.style.color = "#333";

    return () => {
      // 컴포넌트 언마운트 시 body 스타일 초기화
      document.body.style.background = "";
      document.body.style.minHeight = "";
      document.body.style.color = "";
    };
  }, []);
  return (
    <div className={styles.mainContainer}>
      {/* 헤더 섹션 */}
      <div className={styles.headerSection}>
        <div className={styles.logoDisplay}>로고</div>
        <h1 className={styles.mainTitle}>Aimdot.dev</h1>
        <p className={styles.mainSubtitle}>Discord Bot Platform</p>
        <p className={styles.welcomeMessage}>
          디스코드 봇 개발을 위한 완전한 플랫폼입니다.
          <br />
          강력한 도구와 직관적인 인터페이스로 누구나 쉽게 봇을 만들 수 있습니다.
        </p>
      </div>

      {/* 주요 기능 */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🤖</span>
          <h3 className={styles.featureTitle}>봇 개발 도구</h3>
          <p className={styles.featureDescription}>
            코딩 지식 없이도 디스코드 봇을 쉽게 제작할 수 있는 비주얼 에디터와
            강력한 개발 도구를 제공합니다.
          </p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>⚡</span>
          <h3 className={styles.featureTitle}>고성능 호스팅</h3>
          <p className={styles.featureDescription}>
            24/7 안정적인 봇 호스팅 서비스로 언제나 온라인 상태를 유지할 수
            있습니다.
          </p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>🔧</span>
          <h3 className={styles.featureTitle}>커스터마이징</h3>
          <p className={styles.featureDescription}>
            다양한 플러그인과 확장 기능으로 원하는 대로 봇을 커스터마이징할 수
            있습니다.
          </p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureIcon}>📊</span>
          <h3 className={styles.featureTitle}>분석 대시보드</h3>
          <p className={styles.featureDescription}>
            실시간 봇 사용량과 성능 데이터를 한눈에 확인할 수 있는 대시보드를
            제공합니다.
          </p>
        </div>
      </div>

      {/* 프로젝트 지침 */}
      <div className={styles.guidelinesSection}>
        <h2 className={styles.guidelinesTitle}>프로젝트 아키텍처 지침</h2>
        <div className={styles.guidelineCard}>
          <h3>🏗️ 독립적 페이지 구조</h3>
          <p>
            <strong>
              로딩/메인 페이지를 제외한 모든 페이지는 독립적 형태를 지닙니다
            </strong>
          </p>
          <ul>
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

      {/* 액션 버튼 */}
      <div className={styles.actionButtons}>
        <a href="#" className={styles.actionButton}>
          봇 만들기 시작
        </a>
        <a
          href="#"
          className={`${styles.actionButton} ${styles.secondaryButton}`}
        >
          문서 보기
        </a>
      </div>
    </div>
  );
}
