import { BookSearchBar } from "@/components/modules/library-book-search-bar/book-search-bar";

export default function Layout({ children }) {
  return (
    <div className="container compact">
      <BookSearchBar />
      {children}
    </div>
  );
}
