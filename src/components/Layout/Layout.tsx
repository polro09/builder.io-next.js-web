"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";

interface User {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  status: "online" | "idle" | "dnd" | "offline";
  servers: {
    name: string;
    roles: string[];
  }[];
  nickname?: string;
}

interface Member {
  id: string;
  username: string;
  avatar: string;
  role: string;
  status: "online" | "idle" | "dnd" | "offline";
  server: string;
}

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  user?: User;
}

const mockMembers: Member[] = [
  {
    id: "1",
    username: "ADI",
    avatar: "",
    role: "Chancellor",
    status: "online",
    server: "Bannerload",
  },
  {
    id: "2",
    username: "Woong",
    avatar: "",
    role: "Majordomo",
    status: "online",
    server: "Bannerload",
  },
  {
    id: "3",
    username: "arukana_1",
    avatar: "",
    role: "Commander",
    status: "idle",
    server: "Bannerload",
  },
  {
    id: "4",
    username: "mids",
    avatar: "",
    role: "Knights",
    status: "online",
    server: "Bannerload",
  },
  {
    id: "5",
    username: "TBO JOJO",
    avatar: "",
    role: "Knights",
    status: "dnd",
    server: "Bannerload",
  },
  {
    id: "6",
    username: "모스 ○",
    avatar: "",
    role: "Knights",
    status: "offline",
    server: "Bannerload",
  },
  {
    id: "7",
    username: "Nihilanth",
    avatar: "",
    role: "Clown",
    status: "online",
    server: "Bannerload",
  },
];

const menuItems = [
  { name: "홈", href: "/main", icon: "🏠" },
  { name: "파티 관리", href: "/party", icon: "👥" },
  { name: "DB 권한", href: "/db-permissions", icon: "🛡️" },
  { name: "통계", href: "/statistics", icon: "📊" },
  { name: "설정", href: "/settings", icon: "⚙️" },
];

export default function Layout({ children, pageTitle, user }: LayoutProps) {
  const [nickname, setNickname] = useState(
    user?.nickname || user?.username || "",
  );
  const [isEditingNickname, setIsEditingNickname] = useState(false);

  const handleNicknameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditingNickname(false);
    // TODO: API 호출로 닉네임 업데이트
  };

  const groupedMembers = mockMembers.reduce(
    (acc, member) => {
      if (!acc[member.role]) {
        acc[member.role] = [];
      }
      acc[member.role].push(member);
      return acc;
    },
    {} as Record<string, Member[]>,
  );

  return (
    <div className={styles.layoutContainer}>
      {/* 좌측 사이드바 */}
      <div className={styles.leftSidebar}>
        {/* 로고 섹션 */}
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}>A</div>
          <span className={styles.logoText}>Aimdot</span>
        </div>

        {/* 사용자 프로필 섹션 */}
        <div className={styles.userProfileSection}>
          {user ? (
            <div className={styles.userProfile}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                  <div className={styles.avatar}>
                    {user.avatar ? (
                      <Image
                        src={user.avatar}
                        alt="Avatar"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "#5865f2",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {user.username[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div
                    className={`${styles.statusIndicator} ${styles[`status${user.status.charAt(0).toUpperCase() + user.status.slice(1)}`]}`}
                  />
                </div>
                <div className={styles.userDetails}>
                  <h3>{user.username}</h3>
                  <p className={styles.userTag}>#{user.discriminator}</p>
                </div>
              </div>

              {user.servers.map((server, index) => (
                <div key={index} className={styles.serverInfo}>
                  <div className={styles.serverName}>🎯 {server.name} 서버</div>
                  <div className={styles.userRoles}>
                    {server.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className={`${styles.roleTag} ${
                          role === "Admin"
                            ? styles.roleAdmin
                            : role === "Moderator"
                              ? styles.roleModerator
                              : styles.roleMember
                        }`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className={styles.nicknameEdit}>
                {isEditingNickname ? (
                  <form onSubmit={handleNicknameSubmit}>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className={styles.nicknameInput}
                      placeholder="닉네임 입력"
                      autoFocus
                      onBlur={() => setIsEditingNickname(false)}
                    />
                  </form>
                ) : (
                  <div
                    className={styles.nicknameDisplay}
                    onClick={() => setIsEditingNickname(true)}
                    style={{
                      cursor: "pointer",
                      padding: "6px 8px",
                      background: "#40444b",
                      borderRadius: "3px",
                      fontSize: "12px",
                    }}
                  >
                    @{nickname} 님의 게 데시지 보내기 🔧
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className={styles.loginPrompt}>
              <div className={styles.discordLogo}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              <button className={styles.loginButton}>Discord로 로그인</button>
              <p className={styles.loginDescription}>
                Discord 계정으로 로그인하여
                <br />
                서버 정보와 역할을 확인하세요
              </p>
            </div>
          )}
        </div>

        {/* 접속자 리스트 */}
        <div className={styles.memberList}>
          <div className={styles.memberListTitle}>접속자 리스트</div>
          {Object.entries(groupedMembers).map(([role, members]) => (
            <div key={role}>
              <div
                className={styles.memberListTitle}
                style={{ fontSize: "11px", margin: "12px 0 6px 0" }}
              >
                {role} — {members.length}
              </div>
              {members.map((member) => (
                <div key={member.id} className={styles.memberItem}>
                  <div className={styles.memberAvatar}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#5865f2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {member.username[0].toUpperCase()}
                    </div>
                    <div
                      className={`${styles.statusIndicator} ${styles[`status${member.status.charAt(0).toUpperCase() + member.status.slice(1)}`]}`}
                      style={{
                        width: "8px",
                        height: "8px",
                        bottom: "-1px",
                        right: "-1px",
                      }}
                    />
                  </div>
                  <div className={styles.memberInfo}>
                    <div className={styles.memberName}>{member.username}</div>
                    <div className={styles.memberRole}>{member.server}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 메인 컨텐츠 영역 */}
      <div className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h1 className={styles.pageTitle}># {pageTitle}</h1>
          <div className={styles.headerActions}>
            <button className={styles.headerButton}>🔍</button>
            <button className={styles.headerButton}>📌</button>
            <button className={styles.headerButton}>👥</button>
          </div>
        </div>
        <div className={styles.contentBody}>{children}</div>
      </div>

      {/* 우측 사이드바 */}
      <div className={styles.rightSidebar}>
        {/* 웹사이트 로고 */}
        <div className={styles.websiteLogo}>
          <div className={styles.websiteLogoImg}>A</div>
          <div className={styles.websiteTitle}>Aimdot.dev</div>
        </div>

        {/* 메뉴 섹션 */}
        <div className={styles.menuSection}>
          <div className={styles.menuTitle}>메뉴</div>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.menuItem}>
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* 홈페이지 로고 섹션 */}
        <div className={styles.menuSection}>
          <div className={styles.menuTitle}>홈페이지 로고</div>
          <div style={{ padding: "20px", textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#36393f",
                borderRadius: "8px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b9bbbe",
              }}
            >
              로고
            </div>
          </div>
        </div>

        {/* 우측 사이드바 추가 메뉴 */}
        <div className={styles.menuSection}>
          <div className={styles.menuTitle}>우측 사이드바</div>
          <div className={styles.menuItem}>
            <span>📝</span>
            <span>공지사항</span>
          </div>
          <div className={styles.menuItem}>
            <span>🎮</span>
            <span>게임 통계</span>
          </div>
          <div className={styles.menuItem}>
            <span>🏆</span>
            <span>랭킹</span>
          </div>
        </div>
      </div>
    </div>
  );
}
