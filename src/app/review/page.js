"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("/review/quick-view");
  };

  return <main>{moveToPage()}</main>;
}
