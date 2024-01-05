"use client";

import {
  BackLink,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import style from "./page.module.scss";
import { StudyLevelSelector } from "@/components/modules/library-find-study-level-selector/study-level-selector";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import bookData from "@/app/library/sample-data-book-finder.json";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [isExportMode, _isExportMode] = useState(false);

  return (
    <main className={style.prek}>
      <BackLink href="/library/explore" largeFont>
        PreK
      </BackLink>
      <StudyLevelSelector prek />
      <BookList
        count={50}
        isExportMode={isExportMode}
        _isExportMode={_isExportMode}
      >
        {bookData.map((a, i) => {
          return (
            <BookCover
              key={`book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
              onClickCheck
              isExportMode={isExportMode}
            />
          );
        })}
      </BookList>
      <Pagination>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
        <PaginationItem active={true}>1</PaginationItem>
        <PaginationItem active={false}>2</PaginationItem>
        <PaginationItem active={false}>3</PaginationItem>
        <PaginationItem active={false}>4</PaginationItem>
        <PaginationItem active={false}>5</PaginationItem>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
      </Pagination>
    </main>
  );
}
