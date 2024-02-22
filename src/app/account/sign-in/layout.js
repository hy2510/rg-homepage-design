"use client";

import React from "react";
import { usePathname } from "next/navigation";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { Nav, NavItem } from "@/components/common/common-components";
import Link from "next/link";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectPersonalMember = pathname.indexOf("personal-member") != -1;
  const connectGroupMember = pathname.indexOf("group-member") != -1;

  const LogInBox = ({ children }) => {
    return <div className={style.log_in_box}>{children}</div>;
  };

  return (
    <main className={style.sign_in}>
      <div className={style.catchphrase}>
        <div className={style.brand_name}>리딩게이트</div>
        <div className={style.sentence}>읽는 즐거움, 커가는 영어실력</div>
      </div>
      <LogInBox>
        <Nav>
          <Link href="/account/sign-in/personal-member">
            <NavItem active={connectPersonalMember}>개인 회원</NavItem>
          </Link>
          <Link href="/account/sign-in/group-member">
            <NavItem active={connectGroupMember}>
              그룹 회원{" "}
              <span style={{ fontSize: "0.8em", fontWeight: 500 }}>
                (학교, 학원)
              </span>
            </NavItem>
          </Link>
        </Nav>
        {children}
      </LogInBox>
    </main>
  );
}
