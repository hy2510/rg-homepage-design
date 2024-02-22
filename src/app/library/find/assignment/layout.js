"use client";

import Link from "next/link";
import { BackLink, Nav, NavItem } from "@/components/common/common-components";
import { usePathname } from "next/navigation";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectToDo = pathname.indexOf("to-do") != -1;
  const connectTryAgain = pathname.indexOf("try-again") != -1;
  const connectFavorite = pathname.indexOf("favorite") != -1;

  return (
    <div className="pd-top-m">
      <BackLink href="/library/explore" largeFont>
        진행중인 학습
      </BackLink>
      {isMobile ? (
        <div className="mg-bottom-xxs"></div>
      ) : (
        <div className="mg-bottom-m"></div>
      )}

      <Nav>
        <Link href="/library/find/assignment/to-do">
          <NavItem active={connectToDo}>To-Do</NavItem>
        </Link>
        <Link href="/library/find/assignment/try-again">
          <NavItem active={connectTryAgain}>Try Again</NavItem>
        </Link>
        <Link href="/library/find/assignment/favorite">
          <NavItem active={connectFavorite}>Favorite</NavItem>
        </Link>
      </Nav>
      {children}
    </div>
  );
}
