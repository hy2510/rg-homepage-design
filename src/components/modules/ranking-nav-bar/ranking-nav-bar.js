"use client";

import stylesMobile from "./ranking-nav-bar_m.module.scss";
import stylesPc from "./ranking-nav-bar.module.scss";
import { usePathname } from "next/navigation";
import { Nav, NavItem } from "@/components/common/common-components";
import Link from "next/link";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export const RankingNavBar = () => {
  const pathname = usePathname();
  const connectPointsRank = pathname.indexOf("points-rank") != -1;
  const connectChallengeRank = pathname.indexOf("challenge-rank") != -1;
  const connectHallOfFameRank = pathname.indexOf("hall-of-fame-rank") != -1;
  const connectLevelMasterBoard = pathname.indexOf("level-master-board") != -1;

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
        <Link href="/ranking/hall-of-fame-rank">
          <NavItem active={connectHallOfFameRank}>명예의전당</NavItem>
        </Link>
        {/* <Link href="/ranking/level-master-board">
          <NavItem active={connectLevelMasterBoard}>레벨마스터</NavItem>
        </Link> */}
      </Nav>
    </div>
  );
};
