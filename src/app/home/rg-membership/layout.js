"use client";

import { usePathname } from "next/navigation";
import stylesPc from "./page.module.scss";
import {
  NavBar,
  NavItem,
} from "@/components/modules/home-rg-membership-components/nav-bar";

const style = stylesPc;

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectIntroduction =
    pathname.indexOf("/rg-membership/introduction") != -1;
  const connectRefundPolicy =
    pathname.indexOf("/rg-membership/refund-policy") != -1;
  const connectTermsOfService =
    pathname.indexOf("/rg-membership/terms-of-service") != -1;
  const connectPrivacyPolicy =
    pathname.indexOf("/rg-membership/privacy-policy") != -1;

  return (
    <main className={`${style.rg_membership} container`}>
      <NavBar>
        <NavItem
          active={connectIntroduction}
          href={"/home/rg-membership/introduction"}
        >
          멤버십 소개
        </NavItem>
        {/* <NavItem active={false}>멤버십 구매</NavItem> */}
        <NavItem
          active={connectRefundPolicy}
          href={"/home/rg-membership/refund-policy"}
        >
          환불 규정
        </NavItem>
        <NavItem
          active={connectTermsOfService}
          href={"/home/rg-membership/terms-of-service"}
        >
          이용 약관
        </NavItem>
        <NavItem
          active={connectPrivacyPolicy}
          href={"/home/rg-membership/privacy-policy"}
        >
          개인정보 처리방침
        </NavItem>
      </NavBar>
      <div className={style.contents_box}>{children}</div>
    </main>
  );
}
