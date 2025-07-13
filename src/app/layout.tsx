import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aimdot.dev - Discord Bot Platform",
  description: "Discord Bot Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
