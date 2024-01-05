"use client";

import Link from "next/link";
import { BackLink, Nav, NavItem } from "@/components/common/common-components";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  const pageName = [
    "/library/find/assignment/to-do",
    "/library/find/assignment/try-again",
    "/library/find/assignment/favorite",
  ];

  return (
    <div className="pd-top-m">
      <BackLink href="/library/explore" largeFont>
        진행중인 학습
      </BackLink>
      <div className="mg-bottom-m"></div>
      <Nav>
        <Link href="/library/find/assignment/to-do">
          <NavItem active={pathName === pageName[0] ? true : false}>
            To-Do
          </NavItem>
        </Link>
        <Link href="/library/find/assignment/try-again">
          <NavItem active={pathName === pageName[1] ? true : false}>
            Try Again
          </NavItem>
        </Link>
        <Link href="/library/find/assignment/favorite">
          <NavItem active={pathName === pageName[2] ? true : false}>
            Favorite
          </NavItem>
        </Link>
      </Nav>
      {children}
    </div>
  );
}
