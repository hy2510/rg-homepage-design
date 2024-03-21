"use client";

import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// sns카드
const SnsCard = ({ title, txt_link, href, imgSrc }) => {
  return (
    <div className={style.sns_card}>
      <div className={style.group_text}>
        <div className={style.title}>{title}</div>
        <Link href={href ? href : ""} target="_blank">
          <div className={style.btn_link}>
            {txt_link}
            <span className={style.ico_arrow_right}></span>
          </div>
        </Link>
      </div>
      <div className={style.symbol}>
        <Image
          width={300}
          height={300}
          style={{ width: "100%", height: "auto" }}
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className={style.sns}>
      <SnsCard
        title={"RG 일상컷"}
        txt_link={"카페글 보러가기"}
        href={
          "https://cafe.naver.com/readinggatecafe?iframe_url=/ArticleList.nhn%3Fsearch.clubid=29561033%26search.menuid=193%26search.boardtype=L"
        }
        imgSrc={"/src/images/@customer-review/sns_card_1.svg"}
      />
      <SnsCard
        title={"RG에 빠진 우리 가족"}
        txt_link={"카페글 보러가기"}
        href={
          "https://cafe.naver.com/readinggatecafe?iframe_url=/ArticleList.nhn%3Fsearch.clubid=29561033%26search.menuid=30%26search.boardtype=L"
        }
        imgSrc={"/src/images/@customer-review/sns_card_2.svg"}
      />
      <SnsCard
        title={"영어독서왕 대상 수기"}
        txt_link={"카페글 보러가기"}
        href={
          "https://cafe.naver.com/readinggatecafe?iframe_url=/ArticleList.nhn%3Fsearch.clubid=29561033%26search.menuid=113%26search.boardtype=L"
        }
        imgSrc={"/src/images/@customer-review/sns_card_3.svg"}
      />
    </div>
  );
}
