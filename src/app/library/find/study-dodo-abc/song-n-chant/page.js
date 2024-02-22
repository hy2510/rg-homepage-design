"use client";

import {
  BackLink,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { StudyLevelSelector } from "@/components/modules/library-find-study-level-selector/study-level-selector";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import dodoAbcSongnChant from "@/app/library/sample-data-prek-dodo-abc-song-n-chant.json";
import { useState } from "react";
import Image from "next/image";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  return (
    <main className={style.dodo_abc_songn_chant}>
      <StudyLevelSelector dodoabcSongnChant />
      <BookList dodoabcSongnChant count={50}>
        {dodoAbcSongnChant.map((a, i) => {
          return (
            <DodoAbcSongnChantCover
              key={`book-cover-${i}`}
              bookImgSrc={a.bookImage}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
              title={a.title}
              onClickCheck
            />
          );
        })}
      </BookList>
    </main>
  );
}

const DodoAbcSongnChantCover = ({ bookImgSrc, title }) => {
  return (
    <div className={style.dodo_abc_songn_chant_cover}>
      <img alt="" src={bookImgSrc} width={"100%"} className={style.img_cover} />
      <div className={style.txt_title}>{title}</div>
      <div className={style.btn_start}>Start</div>
    </div>
  );
};
