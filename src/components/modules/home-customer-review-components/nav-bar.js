import Link from "next/link";
import stylesPc from "./nav-bar.module.scss";

const style = stylesPc;

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
