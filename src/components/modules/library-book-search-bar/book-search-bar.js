"use client";

import stylesMobile from "./book-search-bar_m.module.scss";
import stylesPc from "./book-search-bar.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

const bookSearchBarCategoryData = [
  {
    title: "기초 학습",
    comment: "알파벳, 파닉스 배우기",
    image: "/src/images/@book-search-bar/dodo_abc.png",
    link: "/library/find/study-dodo-abc/study",
  },
  {
    title: "기초 학습 (classic)",
    comment: "알파벳, 파닉스 배우기",
    image: "/src/images/@book-search-bar/prek.svg",
    link: "/library/find/study-prek",
  },
  {
    title: "eBook",
    comment: "온라인 책읽기와 학습",
    image: "/src/images/@book-search-bar/ebook.svg",
    link: "/library/find/study-e-book",
  },
  {
    title: "pBook Quiz",
    comment: "(원서읽기) ➞ 온라인 학습",
    image: "/src/images/@book-search-bar/pbook_quiz.svg",
    link: "/library/find/study-p-book-quiz",
  },
  {
    title: "Movies",
    comment: "동영상을 포함한 학습",
    image: "/src/images/@book-search-bar/movie_book.svg",
    link: "/library/find/study-p-book-quiz",
  },
  {
    title: "New Books",
    comment: "이 달의 신규도서",
    image: "/src/images/@book-search-bar/new_book.svg",
    link: "/library/find/study-p-book-quiz",
  },
  {
    title: "Lintening",
    comment: "Listening 강화 훈련",
    image: "/src/images/@book-search-bar/listening.svg",
    link: "/",
  },
  {
    title: "Writing",
    comment: "Writing 강화 훈련",
    image: "/src/images/@book-search-bar/writing.svg",
    link: "/",
  },
];

// 도서 검색바
export const BookSearchBar = () => {
  let [isBookSearchActive, _isBookSearchActive] = useState(false);
  useEffect(() => {
    isMobile ? _isBookSearchActive(true) : null;
  }, []);

  return (
    <>
      <div
        className={style.book_search_bar}
        onClick={() => {
          _isBookSearchActive(true);
        }}
      >
        <input
          type="text"
          placeholder="도서 검색"
          style={{ width: "calc(100% - 120px)" }}
        />
        <Button roundFull shadow color={"blue"} width={"115px"}>
          <Image
            alt=""
            src="/src/images/search-icons/search_white.svg"
            width={20}
            height={20}
          ></Image>
          <span>검색</span>
        </Button>
      </div>
      {isBookSearchActive && (
        <>
          <BookSearchBarCategoryContainer />
          <div
            className={style.book_search_bg}
            onClick={() => {
              _isBookSearchActive(false);
            }}
          ></div>
        </>
      )}
    </>
  );
};

// 도서 검색바의 카테고리 메뉴
export const BookSearchBarCategoryContainer = () => {
  return (
    <div className={style.book_search_bar_category_container}>
      <div className={style.row_a}>분류별 탐색:</div>
      <div className={style.row_b}>
        {bookSearchBarCategoryData.map((a, i) => (
          <BookSearchBarCategoryItem
            key={`booksearch-category-${i}`}
            title={a.title}
            comment={a.comment}
            imgSrc={a.image}
            link={a.link}
          />
        ))}
      </div>
    </div>
  );
};

// 도서 검색바의 카테고리 메뉴 아이템
export const BookSearchBarCategoryItem = ({
  link,
  imgSrc,
  title,
  comment,
  key,
}) => {
  return (
    <div
      className={style.book_search_bar_category_item}
      onClick={() => {
        location.href = link;
      }}
      key={key}
    >
      <Image alt="" src={imgSrc} width={60} height={60} />
      <div className={style.col}>
        <div className={style.txt_h}>{title}</div>
        <div className={style.txt_p}>{comment}</div>
      </div>
    </div>
  );
};
