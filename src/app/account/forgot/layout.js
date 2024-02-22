"use client";

import { BackLink, Nav, NavItem } from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Layout({ children }) {
  return <div className={style.forgot}>{children}</div>;
}
