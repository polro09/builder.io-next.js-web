"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./loading.module.css";

export default function LoadingPage() {
  const [dots, setDots] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // 로딩 페이지 전용 body 스타일 적용
    document.body.style.background = "#2c2f33";
    document.body.style.color = "#ffffff";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.minHeight = "100vh";
    document.body.style.overflow = "hidden";

    // 로딩 텍스트 애니메이션
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);

    // 4.5초 후 메인 페이지로 이동
    const timeout = setTimeout(() => {
      const container = document.getElementById("loadingContainer");
      if (container) {
        container.classList.add(styles.fadeOut);
        setTimeout(() => {
          router.push("/main");
        }, 800);
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      // 컴포넌트 언마운트 시 body 스타일 초기화
      document.body.style.background = "";
      document.body.style.color = "";
      document.body.style.display = "";
      document.body.style.justifyContent = "";
      document.body.style.alignItems = "";
      document.body.style.minHeight = "";
      document.body.style.overflow = "";
    };
  }, [router]);

  return (
    <div className={styles.loadingContainer} id="loadingContainer">
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src="https://i.imgur.com/9MwyIGW.gif"
            alt="Aimdot.dev Logo"
            width={192}
            height={192}
            unoptimized
          />
        </div>
        <div className={styles.brandName}>loading</div>
        <div className={styles.brandSubtitle}>Discord Bot Platform</div>
      </div>

      <div className={styles.loadingBarContainer}>
        <div className={styles.loadingBar}></div>
      </div>

      <div className={styles.loadingText}>loading{".".repeat(dots)}</div>

      <div className={styles.loadingTips}>
        💡 Tip: 모든 페이지는 독립적으로 설계되어 더 나은 성능과 유지보수성을
        제공합니다.
      </div>
    </div>
  );
}
