import {
  BackLink,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import style from "./page.module.scss";
import { BookList } from "@/components/modules/library-find-book-list/book-list";
import bookData from "@/app/library/sample-data-book-finder.json";
import Image from "next/image";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import { LibraryFindTop } from "@/components/modules/library-find-top/library-find-top";

export default function Page() {
  return (
    <main className={style.series}>
      <BackLink href="/library/explore" largeFont>
        시리즈
      </BackLink>
      <LibraryFindTop
        title="Sample Series"
        imgSrc="/src/sample-images/series-sample/20_shakespeare_Children_s_stories.png"
      />
      <BookList count={50}>
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
