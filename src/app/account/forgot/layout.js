import { BackLink, Nav, NavItem } from "@/components/common/common-components";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Layout({ children }) {
  return <div className={style.forgot}>{children}</div>;
}
