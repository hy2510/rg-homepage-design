"use client";

import style from "./page.module.scss";
import Image from "next/image";
import {
  BackLink,
  Dropdown,
  DropdownItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { StudyLevelSelector } from "@/components/modules/library-find-study-level-selector/study-level-selector";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import bookData from "@/app/library/sample-data-book-finder.json";
import { useState } from "react";
import LevelSelector from "@/components/modules/library-explore-level-selector/level-selector";

export default function Page() {
  const [isExportMode, _isExportMode] = useState(false);
  const [viewLevelSelector, _viewLevelSelector] = useState(false);

  return (
    <main className={style.ebook}>
      <BackLink href="/library/explore" largeFont>
        eBook
      </BackLink>
      <StudyLevelSelector
        level="KA"
        onClick={() => {
          _viewLevelSelector(true);
        }}
      />
      {viewLevelSelector && (
        <LevelSelector
          _viewLevelSelector={_viewLevelSelector}
          studyType={"eBook"}
        />
      )}
      <BookList
        count={50}
        isExportMode={isExportMode}
        _isExportMode={_isExportMode}
      >
        {bookData.map((a, i) => {
          return (
            <BookCover
              id={`book-cover-${i}`}
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
