"use client";

import Link from "next/link";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { usePathname } from "next/navigation";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectMain = pathname.indexOf("main") != -1;
  const connectMainRgNews = pathname.indexOf("/rg-news") != -1;
  const connectHallOfFame = pathname.indexOf("/hall-of-fame") != -1;
  const connectCustomerReview = pathname.indexOf("/customer-review") != -1;
  const connectRgMembership = pathname.indexOf("/rg-membership") != -1;

  const HomeNavItem = ({ name, href, target, active, onClick }) => {
    return (
      <Link href={href} target={target ? target : "_self"} onClick={onClick}>
        <div className={`${style.home_nav_item} ${active ? style.active : ""}`}>
          {name}
        </div>
      </Link>
    );
  };

  const HomeNavBar = () => {
    return (
      <div className={`${style.home_nav_bar} container`}>
        <HomeNavItem name={"메인"} href={"main"} active={connectMain} />
        <HomeNavItem
          name={"명예의 전당"}
          href={"hall-of-fame"}
          active={connectHallOfFame}
        />
        <HomeNavItem
          name={"활용수기"}
          href={"customer-review"}
          active={connectCustomerReview}
        />
        <HomeNavItem
          name={"RG 멤버십"}
          href={"rg-membership"}
          active={connectRgMembership}
        />
        <HomeNavItem
          name={"고객센터"}
          href={
            "https://pebble-lemongrass-cd6.notion.site/RG-de08c352853549f29bbc98345bedd8a5"
          }
          active={false}
          target={"_blank"}
        />
      </div>
    );
  };

  return (
    <div className={style.home}>
      {connectMainRgNews ? <></> : <HomeNavBar />}
      {children}
    </div>
  );
}
