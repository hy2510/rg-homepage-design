"use client";

import stylesMobile from "./page_m.module.scss";
import styledPc from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : styledPc;

export default function Page() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("/account/sign-in/personal-member");
  };

  return <main className={style.account}>{moveToPage()}</main>;
}
