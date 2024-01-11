"use client";

import stylesPc from "./ranking-nav-bar.module.scss";
import { usePathname } from "next/navigation";
import { Nav, NavItem } from "@/components/common/common-components";
import Link from "next/link";

const style = stylesPc;

export const RankingNavBar = () => {
  const pathname = usePathname();
  const connectPointsRank = pathname.indexOf("points-rank") != -1;
  const connectChallengeRank = pathname.indexOf("challenge-rank") != -1;

  return (
    <div className={style.ranking_nav_bar}>
      <div className={style.txt_h}>학생 랭킹</div>
      <Nav>
        <Link href="/ranking/points-rank">
          <NavItem active={connectPointsRank}>다독(포인트)</NavItem>
        </Link>
        <Link href="/ranking/challenge-rank">
          <NavItem active={connectChallengeRank}>영어독서왕</NavItem>
        </Link>
      </Nav>
    </div>
  );
};
