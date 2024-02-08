"use client";

import Image from "next/image";
import { Dropdown, DropdownItem } from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { ranking } from "../sample-data";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const SubTitle = ({ children, message }) => {
    return (
      <div className={style.sub_title}>
        {children}
        <span>{message}</span>
      </div>
    );
  };

  const UserEngagementStatus = ({
    userAvatar,
    userRank,
    studentName,
    completed,
    earnPoints,
    wordCount,
  }) => {
    const ColumnBox = ({ label, contents }) => {
      return (
        <div className={style.column_box}>
          <div className={style.label}>{label}</div>
          <div className={style.contents}>{contents}</div>
        </div>
      );
    };

    return (
      <div className={style.user_engagement_status}>
        <div className={style.user_symbol}>
          {userRank < 1000 && (
            <div className={style.user_rank}>
              <div className={style.txt_rank}>{userRank}</div>
            </div>
          )}
          <div className={style.user_avatar}>
            <Image alt="" src={userAvatar} width={100} height={100} />
          </div>
        </div>
        <ColumnBox label={"학생 이름"} contents={"김예서"} />
        <ColumnBox label={"학습 권수"} contents={"159"} />
        <ColumnBox label={"획득한 포인트"} contents={"1024.2"} />
        <ColumnBox label={"학습한 단어수"} contents={"10203"} />
      </div>
    );
  };

  const Leaderboard = () => {
    const TableRow = ({
      rank,
      studentAvatar,
      studentName,
      earnPoints,
      completed,
    }) => {
      return (
        <div
          className={`
          ${style.table_row} 
          ${rank < 4 ? style.top_ranker : ""}`}
        >
          <div
            className={`
            ${style.rank} 
            ${
              rank == 3
                ? style.rank3
                : rank == 2
                ? style.rank2
                : rank == 1
                ? style.rank1
                : ""
            }`}
          >
            {rank}
          </div>
          <div
            className={`${style.student_name} ${
              rank == 3
                ? style.rank3
                : rank == 2
                ? style.rank2
                : rank == 1
                ? style.rank1
                : ""
            }`}
          >
            <Image alt="" src={studentAvatar} width={60} height={60} />
            <div className={style.txt_student_name}>{studentName}</div>
          </div>
          <div className={style.txt_earn_points}>{earnPoints}</div>
          <div className={style.txt_completed}>{completed}</div>
        </div>
      );
    };

    return (
      <div className={style.leaderboard}>
        <div className={style.table_header}>
          <div className={style.th_item}>순위</div>
          <div className={style.th_item}>학생 이름</div>
          <div className={style.th_item}>획득한 포인트</div>
          <div className={style.th_item}>학습 권수</div>
        </div>
        {ranking.map((a) => {
          return (
            <TableRow
              rank={a.rank}
              studentAvatar={a.studentAvatar}
              studentName={a.studentName}
              earnPoints={a.earnPoints}
              completed={a.completed}
            />
          );
        })}
      </div>
    );
  };

  return (
    <main className={style.point_rank}>
      <Dropdown title={"월간 랭킹 - 1월"}>
        <DropdownItem>월간 랭킹</DropdownItem>
        <DropdownItem>전체 랭킹</DropdownItem>
      </Dropdown>
      <SubTitle>나의 학습현황</SubTitle>
      <UserEngagementStatus
        userAvatar={
          "https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_08.png"
        }
        userRank={998}
      />
      <SubTitle message={"마지막 업데이트  : 2023.05.23 화요일 오전 12:04"}>
        리더보드
      </SubTitle>
      <Leaderboard />
    </main>
  );
}
