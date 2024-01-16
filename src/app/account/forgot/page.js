"use client";

import styledPc from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const style = styledPc;

export default function Page() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("./forgot/forgot-id");
  };

  return <>{moveToPage()}</>;
}
