"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoadingPage() {
  const [dots, setDots] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // 로딩 텍스트 애니메이션
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);

    // 4.5초 후 메인 페이지로 이동
    const timeout = setTimeout(() => {
      const container = document.getElementById("loadingContainer");
      if (container) {
        container.classList.add("fade-out");
        setTimeout(() => {
          router.push("/main");
        }, 800);
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #2c2f33;
          color: #ffffff;
          font-family:
            "Whitney", "Helvetica Neue", Helvetica, Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          overflow: hidden;
        }

        .loading-container {
          text-align: center;
          animation: fadeIn 0.8s ease-in;
        }

        .logo-container {
          margin-bottom: 40px;
        }

        .logo {
          width: 200px;
          height: 200px;
          background: #ffffff;
          border: 4px solid #000000;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: logoFloat 2s ease-in-out infinite alternate;
          overflow: hidden;
        }

        .logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .brand-name {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .brand-subtitle {
          font-size: 16px;
          color: #b9bbbe;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .loading-bar-container {
          width: 300px;
          height: 8px;
          background: #40444b;
          border-radius: 4px;
          margin: 0 auto 20px;
          overflow: hidden;
          position: relative;
        }

        .loading-bar {
          height: 100%;
          background: linear-gradient(90deg, #5865f2, #7289da);
          border-radius: 4px;
          width: 0%;
          animation: loadingProgress 4.5s ease-out forwards;
          position: relative;
        }

        .loading-bar::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }

        .loading-text {
          font-size: 14px;
          color: #b9bbbe;
          font-weight: 500;
        }

        .loading-tips {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: #72767d;
          text-align: center;
          max-width: 400px;
          opacity: 0;
          animation: tipsAppear 1s ease-in 2s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes logoFloat {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-10px);
          }
        }

        @keyframes loadingProgress {
          0% {
            width: 0%;
          }
          20% {
            width: 15%;
          }
          40% {
            width: 35%;
          }
          60% {
            width: 65%;
          }
          80% {
            width: 85%;
          }
          95% {
            width: 98%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes tipsAppear {
          to {
            opacity: 1;
          }
        }

        .fade-out {
          animation: fadeOut 0.8s ease-out forwards;
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>

      <div className="loading-container" id="loadingContainer">
        <div className="logo-container">
          <div className="logo">
            <Image
              src="https://i.imgur.com/9MwyIGW.gif"
              alt="Aimdot.dev Logo"
              width={192}
              height={192}
              unoptimized
            />
          </div>
          <div className="brand-name">Aimdot.dev</div>
          <div className="brand-subtitle">Discord Bot Platform</div>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>

        <div className="loading-text">loading{".".repeat(dots)}</div>
      </div>

      <div className="loading-tips">
        💡 Tip: 모든 페이지는 독립적으로 설계되어 더 나은 성능과 유지보수성을
        제공합니다.
      </div>
    </>
  );
}
