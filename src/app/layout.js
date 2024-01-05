import "./globals.scss";
import { Inter } from "next/font/google";
import Gheader from "@/components/common/global-header/global-header";
import Gfooter from "@/components/common/global-footer/global-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reading Gate",
  description: "온라인 영어독서관",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Gheader />
        {children}
        <Gfooter />
      </body>
    </html>
  );
}
