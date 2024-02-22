import stylesPc from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const style = stylesPc;

// RG인 인터뷰 카드1
const InterviewCard1 = ({ meidaSrc }) => {
  return (
    <div className={style.interview_card_1}>
      {/* <Link href={href ? href : ""}>
        <Image
          width={300}
          height={300}
          style={{ width: "100%", height: "auto" }}
          src={imgSrc}
        />
      </Link> */}
      <iframe
        width="100%"
        height="560"
        src={meidaSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style={{ display: "block" }}
      ></iframe>
    </div>
  );
};

// RG인 인터뷰 카드2
const InterviewCard2 = ({ imgSrc, href, txt_sub, txt_title, txt_link }) => {
  return (
    <div className={style.interview_card_2}>
      <div className={style.group_thumbnail_image}>
        <Image
          width={300}
          height={300}
          style={{ width: "100%", height: "auto", display: "block" }}
          src={imgSrc}
        />
      </div>
      <div className={style.group_thumnail_text}>
        <div className={style.txt_sub}>{txt_sub}</div>
        <div className={style.txt_title}>{txt_title}</div>
        <div className={style.group_link}>
          <Link href={href ? href : ""} target="_blank">
            <div className={style.btn_link}>
              <span>{txt_link}</span>
              <spna className={style.ico_arrow_right}></spna>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className={`${style.interview} container compact`}>
      <div className={style.group_interview_main_media}>
        <InterviewCard1
          meidaSrc={
            "https://www.youtube.com/embed/VZE-tDzBcxA?si=PFlNT90B8W6qMBDb"
          }
        />
      </div>
      <div className={style.group_interview_thumbnails}>
        <div className={style.txt_label}>인터뷰 모아보기</div>
        <div className={style.list_thumbnails}>
          <InterviewCard2
            imgSrc={"/src/sample-images/interview_thumbnail_image_1.png"}
            txt_sub={"리딩게이트 명예의 전당 'Titanium(티타늄)'등급"}
            txt_title={"'천소현 학생' 특별 인터뷰"}
            txt_link={"카페글 바로 보기"}
            href={
              "https://www.youtube.com/playlist?list=PLbIV2Wes7jczKZkbqMaIjHgSHwDLEuaFO"
            }
          />
          <InterviewCard2
            imgSrc={"/src/sample-images/interview_thumbnail_image_2.png"}
            txt_sub={"2023 리딩게이트 슈퍼스타 선발대회 슈퍼스타상"}
            txt_title={"Presenter 김지율"}
            txt_link={"카페글 바로 보기"}
            href={
              "https://cafe.naver.com/readinggatecafe?iframe_url=/ArticleList.nhn%3Fsearch.clubid=29561033%26search.menuid=31%26search.boardtype=W"
            }
          />
        </div>
      </div>
    </div>
  );
}
