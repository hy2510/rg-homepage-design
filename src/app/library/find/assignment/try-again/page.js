"use client";

import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import Image from "next/image";
import {
  AlertBar,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import bookData from "@/app/library/sample-data-book-finder.json";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  return (
    <main className={style.try_again}>
      <AlertBar>
        학습을 완료했지만 70점을 넘지 못해 통과하지 못한 학습이 이곳에 자동으로
        추가되요.
      </AlertBar>
      <div className={style.try_again_list}>
        {bookData.map((a) => {
          return (
            <BookCover
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              todo={a.todo}
              favorite={a.favorite}
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
    </main>
  );
}
