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
      <meta
        name="viewport"
        content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
      />
      <body>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
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
