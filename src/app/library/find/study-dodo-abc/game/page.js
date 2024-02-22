"use client";

import {
  BackLink,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPC from "./page.module.scss";
import { StudyLevelSelector } from "@/components/modules/library-find-study-level-selector/study-level-selector";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import dodoAbcGameData from "@/app/library/sample-data-prek-dodo-abc-game.json";
import { useState } from "react";
import Image from "next/image";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPC;

export default function Page() {
  return (
    <main className={style.dodo_abc_game}>
      <StudyLevelSelector dodoabcGame />
      <BookList dodoabcGame count={50}>
        {dodoAbcGameData.map((a, i) => {
          return (
            <DodoAbcBookCover
              key={`book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
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

const DodoAbcBookCover = ({ bookImgSrc }) => {
  return (
    <div className={style.dodo_abc_game_cover}>
      <div className={style.group1}>
        <img alt="" src={bookImgSrc} width={"100%"} />
      </div>
      <div className={style.group2}>
        <div className={style.btn_start}>Start</div>
      </div>
    </div>
  );
};
