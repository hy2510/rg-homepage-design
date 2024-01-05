import style from "./page.module.scss";
import { BackLink, EmptyMessage } from "@/components/common/common-components";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";

export default function Page() {
  return (
    <main className={style.search_result}>
      <BackLink href="/library/explore" largeFont>
        검색 결과
      </BackLink>
      {/* <EmptyMessage>Oops... 검색 결과가 없습니다.</EmptyMessage> */}
      <div className={style.row_a}>
        <div className={style.txt_h}>eBook(3)</div>
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
        </div>
      </div>
      <div className={style.row_b}>
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
      </div>
    </main>
  );
}
