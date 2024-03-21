"use client";

import Image from "next/image";
import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import MainBanner from "@/components/modules/home-main-components/home-main-main-banner";
import {
  RgNewsCard,
  RgNewsContainer,
} from "@/components/modules/home-main-components/home-main-rg-news";
import LogIn from "@/components/modules/home-main-components/home-main-log-in";
import {
  AdBannerType1,
  AdBannerType2,
  AdBannersGroup,
} from "@/components/modules/home-main-components/home-main-ad-banners";
import { Margin } from "@/components/common/common-components";
import {
  RgPostContainer,
  RgPostItem,
} from "@/components/modules/home-main-components/home-main-rg-post";
import { LoadingScreen, useMobileDetect } from "@/components/util";
import { useEffect } from "react";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const RgPost = () => {
    return <div className={style.rg_post}>RG 포스트</div>;
  };

  return (
    <main className={`${style.home_news} container`}>
      <LoadingScreen />
      <div className={style.item1}>
        <MainBanner />
      </div>
      <div className={style.item2}>
        <RgNewsContainer>
          <RgNewsCard
            title={"2023하반기 영어독서왕선발대회 결과발표(개인)"}
            // summary={"인포그래픽 함 볼까요?"}
            date={"2024-01-17"}
            // btnMore={"더보기"}
          />
          <RgNewsCard
            tag={"인포그래픽"}
            tagColor={"#FF81AD"}
            title={"뜨거웠던 2023년! RG학습데이터 공개"}
            titleColor={"#000000"}
            summary={"한눈에 보기 쉽게 정리해 보았어요."}
            summaryColor={"#777"}
            // date={"2024-01-17"}
            bgColor={"#FDE2EB"}
            bgImage={"/src/images/@home/rg-news-sample/infographic.svg"}
            btnMore={"보러가기"}
          />
          <RgNewsCard
            title={"2023하반기 영어독서왕선발대회 결과발표(개인)"}
            // summary={"인포그래픽 함 볼까요?"}
            date={"2024-01-17"}
            // btnMore={"더보기"}
          />
          <RgNewsCard
            tag={"뉴스레터"}
            tagColor={"#00AEEF"}
            title={"2024년 3월"}
            titleColor={"#000000"}
            summary={"다양한 정보를 제공해 드려요"}
            summaryColor={"#777"}
            bgColor={"#F1F6FF"}
            bgImage={"/src/images/@home/rg-news-sample/img_news_letter.svg"}
            btnMore={"보러가기"}
          />
          <RgNewsCard
            title={"2023하반기 영어독서왕선발대회 결과발표(개인)"}
            date={"2024-01-17"}
          />
          <RgNewsCard
            tag={"캠페인"}
            tagColor={"#FFE8A2"}
            title={"다독다독 기부캠페인"}
            titleColor={"#FFFFFF"}
            summary={"내가 읽은 책 한권이 누군가의 희망으로"}
            summaryColor={"#ddd"}
            bgColor={"#CA112D"}
            bgImage={"/src/images/@home/rg-news-sample/campaign.svg"}
            // btnMore={"보러가기"}
          />
        </RgNewsContainer>
      </div>
      <div className={style.item3}>
        <LogIn />
      </div>
      <div className={style.item4}>
        <AdBannersGroup>
          <Margin height={10} />
          <AdBannerType1
            href="https://blog.naver.com/readinggate_official/223300337907"
            target={"_blank"}
          >
            <Image
              src="https://postfiles.pstatic.net/MjAyMzEyMjFfMTEw/MDAxNzAzMTI2MzE1MjIw.27Wv3nXsEylHDI0H0KuqZBpPYYnxnKNsluV6qtOKQqYg.dSRF-i9lQOQz3ZXNzQjProz_iUfK3XWxo6q4zRAugvMg.PNG.readinggate_official/3.png?type=w966"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            {/* 하이도도 베너 */}
          </AdBannerType1>
          {/* <AdBannerType1>
            <Image
              src="https://postfiles.pstatic.net/MjAyMzEyMjJfMjY1/MDAxNzAzMjA5MDc2NDE4.BU9n85A77IT-a8QFbrcf2nNu4OS_dtxvpuzXKxdhD48g.y1FQQo8l-flP2cC_umW8Dy_xhkrWxK3fJrNGtWCV4Tcg.PNG.readinggate_official/4.png?type=w966"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </AdBannerType1> */}
          <Margin height={10} />
          <AdBannerType2
            bgColor={"#ff274f20"}
            txt1={"B2B"}
            txt2={"문의하기"}
            imgSrc={"/src/images/@home/img_letter.svg"}
          />
          <AdBannerType2
            bgColor={"#15b5f120"}
            txt1={"DODO & FRIENDS"}
            txt2={"SHOP"}
            imgSrc={"/src/images/@home/img_bag.svg"}
          />
          <AdBannerType2
            bgColor={"#9747FF20"}
            txt1={"WORK BOOK"}
            txt2={"구매하기"}
            imgSrc={"/src/images/@home/img_note.svg"}
          />
        </AdBannersGroup>
      </div>
      <div className={style.item5}>
        <RgPostContainer>
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel240109.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel240105.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel231221.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel240105.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel231221.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
          <RgPostItem
            imgSrc={
              "https://wcfresource.a1edu.com/newsystem/image/channel/channel240109.png?ver=240118111718"
            }
            href={"https://blog.naver.com/readinggate_official/223299291288"}
          />
        </RgPostContainer>
      </div>
    </main>
  );
}
