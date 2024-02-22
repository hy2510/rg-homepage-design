"use client";

import { AlertBar, Modal } from "@/components/common/common-components";
import stylesMobile from "./level-selector_m.module.scss";
import stylesPc from "./level-selector.module.scss";
import { useState } from "react";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function LevelSelector({ _viewLevelSelector, studyType }) {
  const leveledStudyStatusData = [
    {
      level: "KA",
      status: "100",
      total: "100",
      master: "Y",
      masterImage: "/src/images/@my-study-level/level_ka.svg",
    },
    {
      level: "KB",
      status: "90",
      total: "120",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_kb.svg",
    },
    {
      level: "KC",
      status: "91",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_kc.svg",
    },
    {
      level: "1A",
      status: "92",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_1a.svg",
    },
    {
      level: "1B",
      status: "93",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_1b.svg",
    },
    {
      level: "1C",
      status: "94",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_1c.svg",
    },
    {
      level: "2A",
      status: "95",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_2a.svg",
    },
    {
      level: "2B",
      status: "96",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_2b.svg",
    },
    {
      level: "2C",
      status: "97",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_2c.svg",
    },
    {
      level: "3A",
      status: "98",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_3a.svg",
    },
    {
      level: "3B",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_3b.svg",
    },
    {
      level: "3C",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_3c.svg",
    },
    {
      level: "4A",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_4a.svg",
    },
    {
      level: "4B",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_4b.svg",
    },
    {
      level: "4C",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_4c.svg",
    },
    {
      level: "5A",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_5a.svg",
    },
    {
      level: "5B",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_5b.svg",
    },
    {
      level: "5C",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_5c.svg",
    },
    {
      level: "6A",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_6a.svg",
    },
    {
      level: "6B",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_6b.svg",
    },
    {
      level: "6C",
      status: "99",
      total: "100",
      master: "N",
      masterImage: "/src/images/@my-study-level/level_6c.svg",
    },
  ];

  return (
    <>
      <Modal
        compact
        header
        title={`레벨별 탐색 / ${studyType}`}
        onClickDelete={() => {
          _viewLevelSelector(false);
        }}
        onClickLightbox={() => {
          _viewLevelSelector(false);
        }}
      >
        <div className={style.current_study_level_container}>
          <AlertBar>레벨별로 모든 학습을 탐색해 볼 수 있어요.</AlertBar>
          <div className={style.level_items}>
            {leveledStudyStatusData.map((a, i) => {
              return (
                <>
                  {i == 0 && (
                    <div className={style.label}>초등학교 저학년 권장레벨</div>
                  )}
                  {i == 3 && (
                    <div className={style.label}>초등학교 고학년 권장레벨</div>
                  )}
                  {i == 6 && <div className={style.label}>중학교 권장레벨</div>}
                  {i == 12 && (
                    <div className={style.label}>고등학교 권장레벨</div>
                  )}
                  <LeveledStudyStatusItem
                    levelName={a.level}
                    studyCompleted={a.status}
                    totalCount={a.total}
                  />
                </>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}

const LeveledStudyStatusItem = ({
  studentLevel,
  levelName,
  studyCompleted,
  totalCount,
}) => {
  const statusImgae = [
    {
      per: 0,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_0.svg",
    },
    {
      per: 10,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_10.svg",
    },
    {
      per: 20,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_20.svg",
    },
    {
      per: 30,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_30.svg",
    },
    {
      per: 40,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_40.svg",
    },
    {
      per: 50,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_50.svg",
    },
    {
      per: 60,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_60.svg",
    },
    {
      per: 70,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_70.svg",
    },
    {
      per: 80,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_80.svg",
    },
    {
      per: 90,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_90.svg",
    },
    {
      per: 100,
      imgSrc: "/src/images/@my-study-level/leveled_study_progres_100.svg",
    },
  ];

  return (
    <div className={style.leveled_study_status_item} style={{ width: "33%" }}>
      <div
        className={`${style.level_name} ${
          studentLevel == "Y" && style.student_level
        }`}
      >
        {levelName}
      </div>
      <div
        className={style.level_name_bg}
        style={{
          backgroundImage: `url(${statusImgae[3].imgSrc})`,
        }}
      ></div>
      <div className={style.leveled_study_status}>
        <b>{studyCompleted}</b> / {totalCount}
      </div>
    </div>
  );
};
