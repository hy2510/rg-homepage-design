"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("./main/rg-news/notice");
  };

  return <main>{moveToPage()}</main>;
}
