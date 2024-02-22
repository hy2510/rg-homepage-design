"use client";

import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import {
  AlertBar,
  Dropdown,
  DropdownItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import bookData from "@/app/library/sample-data-book-finder.json";
import Image from "next/image";
import { useState } from "react";
import {
  ExportItem,
  ExportModePanel,
} from "@/components/modules/library-export-mode-panel/export-mode-panel";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const [isExportMode, _isExportMode] = useState(false);
  const [isDeleteMode, _isDeleteMode] = useState(false);
  const [isVocaSelected, _isVocaSelected] = useState(true);
  const [isListSelected, _isListSelected] = useState(false);
  const [isTodoSelected, _isTodoSelected] = useState(false);

  return (
    <main className={style.favorite}>
      <AlertBar>
        좋아하는 도서를 도서정보의 💙(add favorite)에 고정하면 이곳에서 언제든지
        찾아볼 수 있어요.
      </AlertBar>
      <div className={style.favorite_sort}>
        <div className={style.favorite_sort_container}>
          <Dropdown title="총 10권">
            <DropdownItem>목록 다운로드</DropdownItem>
            <DropdownItem>
              <span className="color-red">과제 전체삭제</span>
            </DropdownItem>
          </Dropdown>
        </div>
        <div className="flex gap-m">
          <div
            className={style.txt_l}
            onClick={() => {
              isExportMode ? _isExportMode(false) : _isExportMode(true);
            }}
          >
            {isDeleteMode ? undefined : isExportMode ? "작업 취소" : "내보내기"}
          </div>
          <div
            className={style.txt_l}
            onClick={() => {
              isDeleteMode ? _isDeleteMode(false) : _isDeleteMode(true);
            }}
          >
            {isExportMode ? undefined : isDeleteMode ? "삭제 취소" : "삭제"}
          </div>
        </div>
      </div>
      <div className={style.favorite_list}>
        {bookData.map((a) => {
          return (
            <BookCover
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              todo={a.todo}
              favorite={a.favorite}
              assignDate={a.assignDate}
              onClickCheck
              isExportMode={isExportMode}
              isDeleteMode={isDeleteMode}
            />
          );
        })}
      </div>
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
      {/* 내보내기 모드 실행시 */}
      {isExportMode && (
        <ExportModePanel>
          <ExportItem
            isVocaSelected={isVocaSelected}
            onClick={() => {
              _isVocaSelected(true);
              _isListSelected(false);
            }}
          >
            Vocabulary
          </ExportItem>
          <ExportItem
            isListSelected={isListSelected}
            onClick={() => {
              _isVocaSelected(false);
              _isListSelected(true);
            }}
          >
            Book List
          </ExportItem>
        </ExportModePanel>
      )}
      {/* 일괄삭제 모드 실행시 */}
      {isDeleteMode && (
        <ExportModePanel buttonName="선택한 과제를 삭제하기"></ExportModePanel>
      )}
    </main>
  );
}
