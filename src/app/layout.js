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
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
      <meta
        name="viewport"
        content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width, viewport-fit=cover"
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.1/ScrollToPlugin.min.js"></script>
        <script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></script>
        <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
        <script src="script/custom.js"></script>
      </body>
    </html>
  );
}
