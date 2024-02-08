"use client";

import {
  BackLink,
  Margin,
  Nav,
  NavItem,
} from "@/components/common/common-components";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const connectStudy = pathname.indexOf("study-dodo-abc/study") != -1;
  const connectGame = pathname.indexOf("study-dodo-abc/game") != -1;
  const connectSongnChant =
    pathname.indexOf("study-dodo-abc/song-n-chant") != -1;

  return (
    <>
      <div className="pd-top-m"></div>
      <BackLink href="/library/explore" largeFont>
        DODO ABC
      </BackLink>
      <Margin height={5} />
      <Nav>
        <NavItem
          active={connectStudy}
          onClick={() => {
            location.href = "/library/find/study-dodo-abc/study";
          }}
        >
          Study
        </NavItem>
        <NavItem
          active={connectGame}
          onClick={() => {
            location.href = "/library/find/study-dodo-abc/game";
          }}
        >
          Game
        </NavItem>
        <NavItem
          active={connectSongnChant}
          onClick={() => {
            location.href = "/library/find/study-dodo-abc/song-n-chant";
          }}
        >
          Song&Chant
        </NavItem>
      </Nav>
      <Margin height={5} />
      {children}
    </>
  );
}
