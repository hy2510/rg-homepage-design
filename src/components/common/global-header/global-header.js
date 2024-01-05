"use client";

import style from "./global-header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarModal } from "../global-option-calendar/global-option-calendar";
import { MyRgModal } from "../global-option-my-rg/global-option-my-rg";
import { StreakModal } from "../global-option-streak/global-option-streak";
import { QuestModal } from "../global-option-quest/global-option-quest";
import { NoticeModal } from "../global-option-notice/global-option-notice";

// 공통상단
export default function Gheader({ children }) {
  const logOnStatus = true;
  const pathname = usePathname();
  const connectHome = pathname.indexOf("home") != -1;
  const connectAbout = pathname.indexOf("about") != -1;
  const connectTrial = pathname.indexOf("trial") != -1;
  const connectLibrary = pathname.indexOf("library") != -1;
  const connectReview = pathname.indexOf("review") != -1;
  const connectRanking = pathname.indexOf("ranking") != -1;
  const [viewCalendarModal, _viewCalendarModal] = useState(false);
  const [viewMyRgModal, _viewMyRgModal] = useState(false);
  const [viewStreakModal, _viewStreakModal] = useState(false);
  const [viewQuestModal, _viewQuestModal] = useState(false);
  const [viewNoticeModal, _viewNoticeModal] = useState(false);

  return (
    <>
      <div className={style.global_header}>
        <div className={`${style.global_header_container} container`}>
          <div className={style.company_logo}>
            <Image
              alt=""
              src="/src/images/@global-header/company_logo_white.svg"
              width={48}
              height={40}
            />
          </div>
          {logOnStatus ? (
            <GnbLogOn
              connectHome={connectHome}
              connectLibrary={connectLibrary}
              connectReview={connectReview}
              connectRanking={connectRanking}
              _viewCalendarModal={_viewCalendarModal}
              _viewMyRgModal={_viewMyRgModal}
              _viewStreakModal={_viewStreakModal}
              _viewQuestModal={_viewQuestModal}
              _viewNoticeModal={_viewNoticeModal}
            />
          ) : (
            <GnbLogOff
              connectHome={connectHome}
              connectAbout={connectAbout}
              connectTrial={connectTrial}
            />
          )}
        </div>
      </div>
      {viewCalendarModal && (
        <CalendarModal _viewCalendarModal={_viewCalendarModal} />
      )}
      {viewMyRgModal && <MyRgModal _viewMyRgModal={_viewMyRgModal} />}
      {viewStreakModal && <StreakModal _viewStreakModal={_viewStreakModal} />}
      {viewQuestModal && <QuestModal _viewQuestModal={_viewQuestModal} />}
      {viewNoticeModal && <NoticeModal _viewNoticeModal={_viewNoticeModal} />}
    </>
  );
}

// 공통상단 > 로그오프 상태의 메뉴
const GnbLogOff = ({ connectHome, connectAbout, connectTrial }) => {
  return (
    <>
      <div className={style.gnb_log_off}>
        <GnbButton
          active={connectHome}
          href="/home"
          imgSrc="/src/images/@global-header/home.svg"
          menuName="홈"
        />
        <GnbButton
          active={connectAbout}
          href="/about"
          imgSrc="/src/images/@global-header/about_rg.svg"
          menuName="소개"
        />
        <GnbButton
          active={connectTrial}
          href="/trial"
          imgSrc="/src/images/@global-header/trial.svg"
          menuName="체험"
        />
      </div>
      <div className={style.sign_buttons}>
        <Link href="/">회원 가입</Link>
        <Link href="/">로그인</Link>
      </div>
    </>
  );
};

// 공통상단 > 로그온 상태의 메뉴
const GnbLogOn = ({
  connectHome,
  connectLibrary,
  connectReview,
  connectRanking,
  _viewCalendarModal,
  _viewMyRgModal,
  _viewStreakModal,
  _viewQuestModal,
  _viewNoticeModal,
}) => {
  const userAvatarImage =
    "https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_03.png";

  return (
    <>
      <div className={style.gnb_log_on}>
        <GnbButton
          active={connectHome}
          href="/home"
          imgSrc="/src/images/@global-header/home.svg"
          menuName="홈"
        />
        <GnbButton
          active={connectLibrary}
          href="/library/explore"
          imgSrc="/src/images/@global-header/study_room.svg"
          menuName="학습"
        />
        <GnbButton
          active={connectReview}
          href="/review"
          imgSrc="/src/images/@global-header/review.svg"
          menuName="리뷰"
        />
        <GnbButton
          active={connectRanking}
          href="/ranking"
          imgSrc="/src/images/@global-header/ranking.svg"
          menuName="랭킹"
        />
      </div>
      <div className={style.option_buttons}>
        <OptionButton
          isCalendar
          onClick={() => {
            _viewCalendarModal(true);
          }}
        />
        <OptionButton
          imgSrc="/src/images/@global-header/streak.svg"
          onClick={() => {
            _viewStreakModal(true);
          }}
        />
        <OptionButton
          imgSrc="/src/images/@global-header/quest.svg"
          onClick={() => {
            _viewQuestModal(true);
          }}
        />
        <OptionButton
          imgSrc="/src/images/@global-header/notice.svg"
          onClick={() => {
            _viewNoticeModal(true);
          }}
          isNotice={true}
        />
        <OptionButton
          isAvatar
          imgSrc={userAvatarImage}
          onClick={() => {
            _viewMyRgModal(true);
          }}
        />
      </div>
    </>
  );
};

// 공통상단 > 메뉴 버튼
const GnbButton = ({ menuName, active, href, imgSrc }) => {
  return (
    <Link href={href}>
      <div className={`${style.gnb_button} ${active && style.active}`}>
        <Image alt="" src={imgSrc} width={24} height={24} />
        <span>{menuName}</span>
      </div>
    </Link>
  );
};

// 옵션 버튼
const OptionButton = ({ isCalendar, isAvatar, isNotice, onClick, imgSrc }) => {
  const date = new Date();
  const today = ("0" + date.getDate()).slice(-2);
  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const mon = monthNames[date.getMonth()];

  return (
    <>
      {isCalendar ? (
        <div className={style.option_button} onClick={onClick}>
          <div className={style.calendar}>
            <div className={style.date}>
              <div className={style.month}>{mon}</div>
              <div className={style.today}>{today}</div>
            </div>
            <div className={style.calendar_icon}>
              <Image
                alt=""
                src="/src/images/@global-header/calendar.svg"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      ) : isAvatar ? (
        <div
          className={`${style.option_button} ${style.avatar}`}
          onClick={onClick}
        >
          <Image alt="" src={imgSrc} width={40} height={40} />
        </div>
      ) : (
        <div className={style.option_button} onClick={onClick}>
          {/* 새로운 알림이 있을 때 표시되는 점 */}
          {isNotice && <div className={style.new_dot}></div>}
          <Image alt="" src={imgSrc} width={26} height={26} />
        </div>
      )}
    </>
  );
};
