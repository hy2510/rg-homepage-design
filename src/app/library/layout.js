"use client";

import { BookSearchBar } from "@/components/modules/library-book-search-bar/book-search-bar";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();

export default function Layout({ children }) {
  return (
    <div className="container compact">
      {isMobile ? <></> : <BookSearchBar />}
      {children}
    </div>
  );
}
