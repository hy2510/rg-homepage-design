"use client";

import Link from "next/link";
import {
  BackLink,
  Margin,
  Nav,
  NavItem,
} from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { usePathname } from "next/navigation";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectNotice = pathname.indexOf("notice") != -1;
  const connectNewsletter = pathname.indexOf("newsletter") != -1;
  const connectNewContents = pathname.indexOf("new-contents") != -1;
  const connectInfographic = pathname.indexOf("infographic") != -1;
  const connectChallenge = pathname.indexOf("challenge") != -1;
  const connectSuperstar = pathname.indexOf("superstar") != -1;
  const connectCampaign = pathname.indexOf("campaign") != -1;

  return (
    <main className="container compact">
      {isMobile ? <div style={{ padding: "10px" }}></div> : <></>}
      <BackLink href="/home/main" largeFont colorWhite>
        RG 소식
      </BackLink>
      <Margin height={isMobile ? 20 : 30} />
      <div className={style.rg_news}>
        <Nav>
          <Link href="notice">
            <NavItem active={connectNotice}>공지</NavItem>
          </Link>
          <Link href="newsletter">
            <NavItem active={connectNewsletter}>뉴스레터</NavItem>
          </Link>
          <Link href="new-contents">
            <NavItem active={connectNewContents}>신규콘텐츠</NavItem>
          </Link>
          <Link href="infographic">
            <NavItem active={connectInfographic}>인포그래픽</NavItem>
          </Link>
          <Link href="challenge">
            <NavItem active={connectChallenge}>영어독서왕</NavItem>
          </Link>
          <Link href="superstar">
            <NavItem active={connectSuperstar}>슈퍼스타</NavItem>
          </Link>
          <Link href="campaign">
            <NavItem active={connectCampaign}>기부캠페인</NavItem>
          </Link>
        </Nav>
        {children}
      </div>
    </main>
  );
}
