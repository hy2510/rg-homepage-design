import "./globals.scss";
import {
  Inter,
  Noto_Sans_KR,
  Nanum_Gothic,
  IBM_Plex_Sans_KR,
  Gothic_A1,
} from "next/font/google";
import Gheader from "@/components/common/global-header/global-header";
import Gfooter from "@/components/common/global-footer/global-footer";

const inter = Inter({ subsets: ["latin"] });
const noto_sans = Noto_Sans_KR({ subsets: ["latin"] });
const nanum_gothic = Nanum_Gothic({
  preload: false,
  weight: ["400", "700", "800"],
});
const ibm_sans = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const gothic_a1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Reading Gate",
  description: "온라인 영어독서관",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css"
          rel="stylesheet"
        />
        <Gheader />
        {children}
        <Gfooter />
      </body>
    </html>
  );
}
