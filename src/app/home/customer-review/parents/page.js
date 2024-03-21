"use client";

import {
  Board,
  BoardHeader,
  BoardItem,
} from "@/components/modules/home-customer-review-components/board";
import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import { parentsReflectionsData } from "@/components/modules/home-customer-review-components/sample-data";
import {
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  return (
    <div className={style.parents}>
      <Board>
        <BoardHeader
          txt_th1={"no."}
          txt_th2={"제목"}
          txt_th3={"이름"}
          txt_th4={"날짜"}
        />
        {parentsReflectionsData.map((a) => {
          return (
            <BoardItem
              txt_td1={a.number}
              txt_td2={a.title}
              txt_td3={a.studentName}
              txt_td4={a.date}
              href={"/home/customer-review/parents/content"}
            />
          );
        })}
      </Board>
      <Pagination>
        <PaginationItem>
          <div className="ico-arrow-left"></div>
        </PaginationItem>
        <PaginationItem active>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <PaginationItem>
          <div className="ico-arrow-right"></div>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
