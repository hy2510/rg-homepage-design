import { ReviewNavBar } from "@/components/modules/review-nav-bar/review-nav-bar";

export default function Layout({ children }) {
  return (
    <div className="container compact">
      <ReviewNavBar />
      {children}
    </div>
  );
}
