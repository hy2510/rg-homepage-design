"use client";

import stylesPc from "./page.module.scss";
import {
  NavBar,
  NavItem,
} from "@/components/modules/home-customer-review-components/nav-bar";
import { usePathname } from "next/navigation";

const style = stylesPc;

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectStudent = pathname.indexOf("/student") != -1;
  const connectParents = pathname.indexOf("/parents") != -1;
  const connectInterview = pathname.indexOf("/interview") != -1;
  const connectSns = pathname.indexOf("/sns") != -1;

  return (
    <main className={`${style.customer_review} container`}>
      <NavBar>
        <NavItem active={connectStudent} href={"/home/customer-review/student"}>
          학생 수기
        </NavItem>
        <NavItem active={connectParents} href={"/home/customer-review/parents"}>
          학부모 수기
        </NavItem>
        <NavItem
          active={connectInterview}
          href={"/home/customer-review/interview"}
        >
          RG인 인터뷰
        </NavItem>
        <NavItem active={connectSns} href={"/home/customer-review/sns"}>
          SNS 후기
        </NavItem>
      </NavBar>
      <div className={style.contents_box}>{children}</div>
    </main>
  );
}
