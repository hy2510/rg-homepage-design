"use client";

import Image from "next/image";
import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import { useEffect, useRef, useState } from "react";
import AbooutContents from "./_aboutContents";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Home() {
  // const iframeRef = useRef();

  // useEffect(() => {
  //   const adjustIframeHeight = () => {
  //     const iframe = iframeRef.current;
  //     if (iframe) {
  //       iframe.style.height =
  //         iframe.contentWindow.document.body.scrollHeight + "px";
  //     }
  //   };
  //   iframeRef.current.addEventListener("load", adjustIframeHeight);
  // }, []);

  return (
    <main style={{ padding: 0 }}>
      <iframe
        title="External Content"
        width="100%"
        height="100%"
        src={
          isMobile
            ? "/src/html/page-contents/mobile/about/index.html"
            : "/src/html/page-contents/pc/about/index.html"
        }
        frameBorder="0"
        className={style.iframe}
      />
      {/* <iframe
        title="External Content"
        width="100%"
        ref={iframeRef}
        src="/src/html/page-contents/about/index.html"
        frameBorder="0"
        className={style.iframe}
      /> */}
      {/* <AbooutContents /> */}
      {/* <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Section09 /> */}
    </main>
  );
}

const Section01 = () => {
  return (
    <div className={style.section01}>
      <div className={style.container}>
        <div className={style.group_video}>
          <div className={style.group_heading}>
            {/* <div className={style.txt_h2}>
              영어문해력 키우려면 다독 & 정독이 필수!
            </div> */}
            <div className={style.txt_h2}>
              6,000여 권의 다독과 정독으로 영어실력 UP!
            </div>
            {/* <div className={style.txt_h1}>둘 다 잡는 건 오직</div> */}
            <div className={style.txt_h1}>제대로된 영어독서</div>
            <div className={style.txt_h1}>
              {/* <span>리딩게이트</span> 뿐! */}
              <span>리딩게이트</span>
            </div>
            {/* <div className={style.txt_p}>3,000권 eBook으로 다독을 제대로</div>
            <div className={style.txt_p}>
              수준별 독후프로그램으로 정독을 제대로
            </div> */}
          </div>
          <div className={style.box_video_container}>
            <iframe
              width="1600"
              height="800"
              src="https://www.youtube.com/embed/q2hOSnIXVMA?si=wwvCuk4hB2MPyca7&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=q2hOSnIXVMA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThumbnailCardLeft = ({ imgSrc, txtHead, txtP, bgColor }) => {
  return (
    <div
      className={style.thumbnail_card_left}
      style={{ backgroundColor: bgColor }}
    >
      <div className={style.group_thumbnail}>
        <Image
          src={imgSrc}
          width={300}
          height={200}
          className={style.img_thumbnail}
        />
        <div className={style.group_text}>
          <div className={style.txt_head}>{txtHead}</div>
          <div className={style.txt_p}>{txtP}</div>
        </div>
      </div>
    </div>
  );
};

const ThumbnailCardRight = ({ imgSrc, txtHead, txtP, bgColor }) => {
  return (
    <div
      className={style.thumbnail_card_right}
      style={{ backgroundColor: bgColor }}
    >
      <div className={style.group_thumbnail}>
        <div className={style.group_text}>
          <div className={style.txt_head}>{txtHead}</div>
          <div className={style.txt_p}>{txtP}</div>
        </div>
        <Image
          src={imgSrc}
          width={300}
          height={200}
          className={style.img_thumbnail}
        />
      </div>
    </div>
  );
};

const Section02 = () => {
  return (
    <div className={style.section02}>
      <div className={style.container}>
        <div className={style.group_heading}>
          <div className={style.txt_h1}>다독,</div>
          {/* <div className={style.txt_h2}>어떻게 제대로 하나요?</div> */}
          <div className={style.txt_h2}>제대로 하려면?</div>
        </div>
        <ThumbnailCardLeft
          imgSrc={"/src/html/page-contents/about/img/smothing_img01.png"}
          txtP={
            <>
              수준에 맞는 영어책을 <br /> 원어민의 소리로 듣기도 하고 <br />
              혼자 소리내어 읽어보기도 해야합니다.
            </>
          }
          bgColor={"#f0f2f5"}
        />
        <ThumbnailCardRight
          imgSrc={"/src/html/page-contents/about/img/smothing_img02.png"}
          txtHead={"수준이 중요한 이유!"}
          txtP={
            <>
              초등1학년인데 돌잡이책을 읽으면 아이에게 도움이 될까요?
              <br />
              혹은 너무 어려워서 한 줄 읽는 것도 벅차다면 어떨까요?
              <br />
              아이가 노력을 하면 읽어낼 수 있는 정도의,
              <br />
              수준에 맞는 도서를 많이 읽을 때 다독의 의미가 있습니다.
            </>
          }
          bgColor={"#f0f2f5"}
        />
        <ThumbnailCardLeft
          imgSrc={"/src/html/page-contents/about/img/smothing_img03.png"}
          txtHead={"원어민의 소리가 필요한 이유!"}
          txtP={
            <>
              언어 습득에서 많은 노출은 필수입니다.
              <br />
              하지만 한국에서 많은 노출이 어렵습니다.
              <br />
              부모님이 영어책을 읽어주기에도 어려움이 있습니다.
              <br />
              그래서 원어민 음성이 지원되는 eBook으로
              <br />
              영어 input을 쌓아야 합니다.
            </>
          }
          bgColor={"#f0f2f5"}
        />
        <ThumbnailCardRight
          imgSrc={"/src/html/page-contents/about/img/smothing_img04.png"}
          txtHead={"소리 내는 것이 필요한 이유!"}
          txtP={
            <>
              영어 input을 쌓고 파닉스를 완성했다면 혼자 읽기도 해야 합니다.
              <br />
              자신의 속도에 맞추어 입 밖으로 내뱉으며
              <br />
              머릿속으로 구조화하면서 의미를 이해하는 훈련이 필요합니다.
            </>
          }
          bgColor={"#f0f2f5"}
        />
        <div className={style.box_ending_text}>
          리딩게이트는 약 3,000편 eBook을 22레벨로 수준을 세분화 하였으며
          <br />
          원어민 음성 지원, 혼자읽기 모드를 제공합니다.
          <br />
          즉, 다독을 제대로 하기 위한 모든 기능을 갖추었습니다.
        </div>
      </div>
    </div>
  );
};

const Section03 = () => {
  return (
    <div className={style.section03}>
      <div className={style.container}>
        <div className={style.group_heading}>
          <div className={style.txt_h1}>정독,</div>
          {/* <div className={style.txt_h2}>어떻게 제대로 하나요?</div> */}
          <div className={style.txt_h2}>제대로 하려면?</div>
        </div>
        <ThumbnailCardLeft
          imgSrc={"/src/html/page-contents/about/img/smothing_img03.png"}
          txtP={
            <>
              글의 맥락과 핵심을 파악하는 것이 정독입니다.
              <br />
              어럽겠지요?
              <br />
              그래서 노력이 필요하고, 훈련이 필요하며, 프로그램이 필요합니다.
            </>
          }
          bgColor={"#ffffff"}
        />
        <ThumbnailCardRight
          imgSrc={"/src/html/page-contents/about/img/smothing_img04.png"}
          txtHead={"맥락을 파악하는 훈련"}
          txtP={
            <>
              영어책을 볼 때 모르는 단어를 필연적으로 만나게 됩니다.
              <br />
              이 때 당황하지 않고, 그림과 스토리를 통해 유추한 후<br />
              자신이 이해한 맥락이 맞는지
              <br />
              단어학습과 읽기 이해도 점검 퀴즈로 확인하는 과정이 필요합니다
            </>
          }
          bgColor={"#ffffff"}
        />
        <ThumbnailCardLeft
          imgSrc={"/src/html/page-contents/about/img/smothing_img05.png"}
          txtHead={"원어민의 소리가 필요한 이유!"}
          txtP={
            <>
              언어 습득에서 많은 노출은 필수입니다.
              <br />
              하지만 한국에서 많은 노출이 어렵습니다.
              <br />
              부모님이 영어책을 읽어주기에도 어려움이 있습니다.
              <br />
              그래서 원어민 음성이 지원되는 eBook으로
              <br />
              영어 input을 쌓아야 합니다.
            </>
          }
          bgColor={"#ffffff"}
        />
        <ThumbnailCardRight
          imgSrc={"/src/html/page-contents/about/img/smothing_img01.png"}
          txtHead={"핵심을 파악하는 능력"}
          txtP={
            <>
              글을 읽을 때 건성으로 읽지 않고 인과관계를 파악하고
              <br />
              스토리의 흐름을 이해하며 읽어야 핵심을 파악할 수 있습니다.
              <br />
              이를 위해서는 요약하기 문제를 꾸준히 풀이하며,
              <br />긴 글을 구조화하는 훈련이 필요합니다.
            </>
          }
          bgColor={"#ffffff"}
        />
        <ThumbnailCardLeft
          imgSrc={"/src/html/page-contents/about/img/smothing_img03.png"}
          txtHead={"노력이 필요"}
          txtP={
            <>
              이 모든 과정은 그냥 눈으로 훑어 읽는 것이 아니기에 힘이 듭니다.
              <br />
              하지만 반드시 거쳐야 하는 과정이기에, 체계적인 문제 시스템과
              <br />
              포인트, 선물 등 보상이 필요합니다.
            </>
          }
          bgColor={"#ffffff"}
        />
        <div className={style.box_ending_text}>
          리딩게이트는, 듣기, 독해, 요약, 쓰기, 단어 등 체계적 독후프로그램을
          제공하고 있으며
          <br />
          70점 이상 받으면 포인트를 주고, 이 포인트로 영어독서왕 선발대회 선물을
          수여합니다.
          <br />
          즉, 정독을 제대로 하기 위한 모든 기능을 갖추었습니다.
        </div>
      </div>
    </div>
  );
};

const Section04 = () => {
  const Column = ({
    color,
    icon1Src,
    icon2Src,
    txtSub,
    txtHead,
    txtRow1_1,
    txtRow1_2,
    txtRow2_1,
    txtRow2_2,
  }) => {
    return (
      <div className={style.column}>
        <div className={style.group_title}>
          <div className={style.txt_sub}>{txtSub}</div>
          <div className={style.txt_head} style={{ color: color }}>
            {txtHead}
          </div>
        </div>
        <div className={style.group_contents}>
          <div className={style.group_contents_row1}>
            <div className={style.group_contents_icon}>
              <Image
                src={icon1Src}
                width={50}
                height={50}
                style={{ display: "block", width: "100%" }}
              />
            </div>
            <div className={style.group_contents_text}>
              <div className={style.txt_row1}>{txtRow1_1}</div>
              <div className={style.txt_row2}>{txtRow1_2}</div>
            </div>
          </div>
          <div className={style.group_contents_row2}>
            <div className={style.group_contents_icon}>
              <Image
                src={icon2Src}
                width={50}
                height={50}
                style={{ display: "block", width: "100%" }}
              />
            </div>
            <div className={style.group_contents_text}>
              <div className={style.txt_row1}>{txtRow2_1}</div>
              <div className={style.txt_row2}>{txtRow2_2}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.section04}>
      <div className={style.container}>
        <div className={style.group_heading}>
          <div className={style.txt_h2}>
            다독과 정독 모두를 갖춘 <span>유</span>
            <span>일</span>
            <span>무</span>
            <span>이</span> <span>영</span>
            <span>어</span>
            <span>독</span>
            <span>서</span>
          </div>
          <div className={style.txt_h1}>리딩게이트 서비스 구성</div>
        </div>
        {/* <div className={style.group_columns}>
          <Column
            color={"#3ab6ff"}
            txtSub={"다독을 위한"}
            txtHead={"컨텐츠"}
            icon1Src={"/src/html/page-contents/about/img/icon_con01.svg"}
            icon2Src={"/src/html/page-contents/about/img/icon_con02.svg"}
            txtRow1_1={"원어민 음성이 지원되는"}
            txtRow1_2={"22단계 eBook 약 3,000권"}
            txtRow2_1={"파닉스를 재밌게 학습할 수 있는"}
            txtRow2_2={"도도 ABC 콘텐츠 약 300편"}
          />
          <Column
            color={"#e08290"}
            txtSub={"정독을 위한"}
            txtHead={"독후활동"}
            icon1Src={"/src/html/page-contents/about/img/icon_reading01.svg"}
            icon2Src={"/src/html/page-contents/about/img/icon_reading02.svg"}
            txtRow1_1={"eBook 이해도 점검이 가능한"}
            txtRow1_2={"수준별 독후 프로그램"}
            txtRow2_1={"해외유명 원서 3,000권에 대한"}
            txtRow2_2={"pBook Quiz"}
          />
          <Column
            color={"#94bf49"}
            txtSub={"끝까지 책임지는"}
            txtHead={"케어"}
            icon1Src={"/src/html/page-contents/about/img/icon_care01.svg"}
            icon2Src={"/src/html/page-contents/about/img/icon_care02.svg"}
            txtRow1_1={"레벨테스트, 주간/월간 리포트 등"}
            txtRow1_2={"학습케어 기능"}
            txtRow2_1={"레벨마스터, 영어독서왕대회 등"}
            txtRow2_2={"동기부여 기능"}
          />
          <Column
            color={"#e99c35"}
            txtSub={"제대로 된"}
            txtHead={"효과"}
            icon1Src={"/src/html/page-contents/about/img/icon_effect01.svg"}
            icon2Src={"/src/html/page-contents/about/img/icon_effect02.svg"}
            txtRow1_1={"듣기부터 문해력까지"}
            txtRow1_2={"6가지 학습효과"}
            txtRow2_1={"누적회원 74만명이 말하는"}
            txtRow2_2={"생생 후기"}
          />
        </div> */}
      </div>
    </div>
  );
};

const SectionNav = ({ active }) => {
  const [isActive, _isActive] = useState(active);

  return (
    <div className={style.section_nav}>
      <div className={style.container}>
        <div
          className={`${style.col01} ${isActive == "col01" && style.active}`}
          onClick={() => {
            location.href = "#section05";
          }}
        >
          컨텐츠
        </div>
        <div
          className={`${style.col02} ${isActive == "col02" && style.active}`}
          onClick={() => {
            location.href = "#section06";
          }}
        >
          독후활동
        </div>
        <div
          className={`${style.col03} ${isActive == "col03" && style.active}`}
          onClick={() => {
            location.href = "#section07";
          }}
        >
          케어
        </div>
        <div
          className={`${style.col04} ${isActive == "col04" && style.active}`}
          onClick={() => {
            location.href = "#section08";
          }}
        >
          효과/후기
        </div>
      </div>
    </div>
  );
};

const Section05 = () => {
  return (
    <div>
      <SectionNav active={"col01"} />
      <div id="section05" className={style.section05}>
        <div className={style.container}>
          <div className={style.heading}>
            <div className={style.ico_sec01}></div>
            <div className={style.txt_h1}>
              <span>다독을 위한</span> 컨텐츠
            </div>
          </div>
          <div className={style.tabs}>
            <div className={`${style.btn_tab} ${style.active}`}>eBook</div>
            <div className={`${style.btn_tab}`}>DODO ABC</div>
          </div>
          <div className={style.group_contents}>
            <div className={style.top_contents}>
              <div className={style.item_card}>
                <div className={style.txt_row01}>
                  영어권 기준 <br /> 유치원 이전 ~ 초등 6학년
                </div>
                <div className={style.txt_row02}>총 21단계 구성</div>
              </div>
              <div className={style.item_card}>
                <div className={style.txt_row01}>
                  다양한 해외 출판사와 협업으로
                  <br />
                  다양한 주제, 스토리라인,그림체로
                </div>
                <div className={style.txt_row02}>끝없는 흥미 유발</div>
              </div>
              <div className={style.item_card}>
                <div className={style.txt_row01}>
                  세계명작, 창작 등 문학 외에
                  <br />
                  동물, 역사, IT 등 비문학까지
                </div>
                <div className={style.txt_row02}>독서편식 NO</div>
              </div>
            </div>
            <div className={style.center_contents}>
              <div className={style.txt_title}>컨텐츠 미리보기</div>
              <div className={style.group_columns}>
                <div className={style.col_left}>
                  <div className={style.list_box}>
                    <div className={style.list_item}>KA, KB, KC 단계</div>
                    <div className={style.list_item}>1A, 1B, 1C 단계</div>
                    <div className={style.list_item}>2A, 2B, 2C 단계</div>
                    <div className={style.list_item}>3A ~ 6B 단계</div>
                  </div>
                </div>
                <div className={style.col_right}>안녕</div>
              </div>
            </div>
            <div className={style.bottom_contents}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section06 = () => {
  return (
    <div>
      <SectionNav active={"col02"} />
      <div id="section06" className={style.section06}>
        <div className={style.container}></div>
      </div>
    </div>
  );
};

const Section07 = () => {
  return (
    <div>
      <SectionNav active={"col03"} />
      <div id="section07" className={style.section07}>
        <div className={style.container}></div>
      </div>
    </div>
  );
};

const Section08 = () => {
  return (
    <div>
      <SectionNav active={"col04"} />
      <div id="section08" className={style.section08}>
        <div className={style.container}></div>
      </div>
    </div>
  );
};

const Section09 = () => {
  return (
    <div className={style.section09}>
      <div className={style.container}>블라 블라</div>
    </div>
  );
};
