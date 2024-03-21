"use client";

import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import Image from "next/image";
import Link from "next/link";
import { hallOfFameRanking } from "../sample-data";
import { useMobileDetect } from "@/components/util";
import { Modal } from "@/components/common/common-components";
import { useState } from "react";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 리더보드
const Leaderboard = () => {
  return (
    <div className={style.leaderboard}>
      <div className={style.table_header}>
        <div className={style.th_item}>순위</div>
        <div className={style.th_item}>학생 이름</div>
        <div className={style.th_item}>등재일</div>
        <div className={style.th_item}>포인트 / 학습 권수</div>
      </div>
      {hallOfFameRanking.map((a) => {
        return (
          <LeaderboardTableRow
            rank={a.rank}
            medal={a.medal}
            studentName={a.studentName}
            earnPoints={a.earnPoints}
            completed={a.completed}
            date={a.date}
          />
        );
      })}
    </div>
  );
};

// 리더보드 테이블 아이템
const LeaderboardTableRow = ({
  rank,
  medal,
  studentName,
  earnPoints,
  completed,
  date,
}) => {
  const medalImage = () => {
    const imageSrc = {
      titanium: "/src/images/@ranking/hall-of-fame/titanium.png",
      platinum: "/src/images/@ranking/hall-of-fame/platinum.png",
      gold: "/src/images/@ranking/hall-of-fame/gold.png",
      silver: "/src/images/@ranking/hall-of-fame/silver.png",
      bronze: "/src/images/@ranking/hall-of-fame/bronze.png",
    };
    if (medal == "titanium") {
      return imageSrc.titanium;
    }
    if (medal == "platinum") {
      return imageSrc.platinum;
    }
    if (medal == "gold") {
      return imageSrc.gold;
    }
    if (medal == "silver") {
      return imageSrc.silver;
    }
    if (medal == "bronze") {
      return imageSrc.bronze;
    }
  };

  return (
    <div className={style.table_row}>
      <div className={style.rank}>{rank}</div>
      <div className={style.student_name}>
        <Image
          alt=""
          src={medalImage()}
          width={60}
          height={60}
          style={{ width: isMobile ? 30 : 60, height: "auto" }}
        />
        <div className={style.txt_student_name}>{studentName}</div>
      </div>
      <div className={style.txt_date}>{date}</div>
      <div className={style.txt_earn_points}>
        {earnPoints} / {completed}
      </div>
    </div>
  );
};

export default function Page() {
  const [viewModal, _viewModal] = useState(false);

  return (
    <main className={style.hall_off_fame_rank}>
      <div className={style.group_comment}>
        <span className={style.txt_comment}>
          명예의 전당에 등재된 학생들은 Reading Gate의 R포인트를 10,000점 이상
          획득한 학생들입니다.
        </span>
        <div
          className={style.btn_link}
          onClick={() => {
            _viewModal(true);
          }}
        >
          <span>등급 및 장학 혜택</span>
        </div>
        {viewModal && (
          <Modal
            header
            title={"등급 및 장학혜택"}
            onClickDelete={() => {
              _viewModal(false);
            }}
            onClickLightbox={() => {
              _viewModal(false);
            }}
          >
            <iframe
              width={"100%"}
              frameBorder="0"
              scrolling="no"
              src={
                isMobile
                  ? "/src/html/page-contents/mobile/ranking/ranking_03_scholarship_benefits_pop.html"
                  : "/src/html/page-contents/pc/ranking/ranking_03_scholarship_benefits_pop.html"
              }
              style={{
                height: isMobile ? "1175px" : "870px",
                backgroundColor: "transparent",
                overflow: "hidden",
              }}
            />
          </Modal>
        )}
      </div>
      <div className={style.group_leaderboard}>
        <Leaderboard />
      </div>
    </main>
  );
}
