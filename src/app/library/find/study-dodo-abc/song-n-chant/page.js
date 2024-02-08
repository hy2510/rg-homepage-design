"use client";

import {
  BackLink,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import style from "./page.module.scss";
import { StudyLevelSelector } from "@/components/modules/library-find-study-level-selector/study-level-selector";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import dodoAbcSongnChant from "@/app/library/sample-data-prek-dodo-abc-song-n-chant.json";
import { useState } from "react";
import Image from "next/image";

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
              onClickCheck
            />
          );
        })}
      </BookList>
    </main>
  );
}

const DodoAbcSongnChantCover = ({ bookImgSrc }) => {
  return (
    <div className={style.dodo_abc_songn_chant_cover}>
      <div className={style.group1}>
        <img alt="" src={bookImgSrc} width={"100%"} />
      </div>
      <div className={style.group2}>
        <div className={style.btn_start}>Start</div>
      </div>
    </div>
  );
};
