"use client";

import { useMobileDetect } from "@/components/util";
import stylesPc from "./page.module.scss";
import stylesMobile from "./page_m.module.scss";
import {
  BackLink,
  EmptyMessage,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  return (
    <main className={style.search_result}>
      <BackLink href="/library/explore" largeFont>
        검색 결과
      </BackLink>
      <Nav>
        <NavItem active={false}>eBook(3)</NavItem>
        <NavItem active={true}>pBook Quiz(3)</NavItem>
      </Nav>
      {/* <EmptyMessage>Oops... 검색 결과가 없습니다.</EmptyMessage> */}
      <div className={style.row_a}>
        {/* <div className={style.txt_h}>eBook(3)</div> */}
        <div className={style.book_list}>
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-kc-152.jpg"
            bookCode={"EB-KA-001"}
            earnPoint={11.1}
          />
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-kc-152.jpg"
            bookCode={"EB-KA-001"}
            earnPoint={11.1}
          />
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-kc-152.jpg"
            bookCode={"EB-KA-001"}
            earnPoint={11.1}
          />
        </div>
        <Pagination>
          <PaginationItem>
            <div className="ico-arrow-left"></div>
            {/* <Image
            alt=""
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          /> */}
          </PaginationItem>
          <PaginationItem active={true}>1</PaginationItem>
          <PaginationItem active={false}>2</PaginationItem>
          <PaginationItem active={false}>3</PaginationItem>
          <PaginationItem active={false}>4</PaginationItem>
          <PaginationItem active={false}>5</PaginationItem>
          <PaginationItem>
            <div className="ico-arrow-right"></div>
            {/* <Image
            alt=""
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          /> */}
          </PaginationItem>
        </Pagination>
      </div>
      {/* <div className={style.row_b}>
        <div className={style.txt_h}>pBook Quiz(4)</div>
        <div className={style.book_list}>
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/pb-1c-113.png"
            bookCode={"PB-KC-001"}
            earnPoint={11.1}
          />
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/pb-1c-113.png"
            bookCode={"PB-KC-001"}
            earnPoint={11.1}
          />
          <BookCover
            bookImgSrc="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/pb-1c-113.png"
            bookCode={"PB-KC-001"}
            earnPoint={11.1}
          />
        </div>
      </div> */}
    </main>
  );
}
