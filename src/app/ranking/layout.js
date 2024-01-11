import { RankingNavBar } from "@/components/modules/ranking-nav-bar/ranking-nav-bar";

export default function Layout({ children }) {
  return (
    <div className="container compact">
      <RankingNavBar />
      {children}
    </div>
  );
}
