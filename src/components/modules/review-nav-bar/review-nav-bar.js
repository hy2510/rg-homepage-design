"use client";

import stylesMobile from "./review-nav-bar_m.module.scss";
import styelsPc from "./review-nav-bar.module.scss";
import Link from "next/link";
import { Nav, NavItem } from "@/components/common/common-components";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : styelsPc;

// ReviewNavBar : 간편보기, 상세보기 네브바
export function ReviewNavBar() {
  const pathname = usePathname();
  const connectQuickView = pathname.indexOf("quick-view") != -1;
  const connectDetailedView = pathname.indexOf("detailed-view") != -1;

  return (
    <div className={style.review_nav_bar}>
      <div className={style.txt_h}>학습결과</div>
      <Nav>
        <Link href="/review/quick-view">
          <NavItem active={connectQuickView}>간편보기</NavItem>
        </Link>
        <Link href="/review/detailed-view">
          <NavItem active={connectDetailedView}>상세보기</NavItem>
        </Link>
      </Nav>
    </div>
  );
}
