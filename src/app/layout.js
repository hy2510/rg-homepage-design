import "./globals.scss";
import { Inter } from "next/font/google";
import Gheader from "@/components/common/global-header/global-header";
import Gfooter from "@/components/common/global-footer/global-footer";

export const metadata = {
  title: "Reading Gate",
  description: "온라인 영어독서관",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css"
          rel="stylesheet"
        />
        <Gheader />
        {/* 띠 베너 들어가는 곳 */}
        {children}
        <Gfooter />
      </body>
    </html>
  );
}
