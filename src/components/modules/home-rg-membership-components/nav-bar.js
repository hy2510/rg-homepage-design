import Link from "next/link";
import stylesPc from "./nav-bar.module.scss";
import stylesMobile from "./nav-bar_m.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export function NavBar({ children }) {
  return <div className={style.nav_bar}>{children}</div>;
}

export function NavItem({ children, active, onClick, href }) {
  return (
    <Link href={href ? href : "/"}>
      <div
        className={`${style.nav_item} ${active ? style.active : null}`}
        onClick={onClick}
      >
        {children}
      </div>
    </Link>
  );
}
