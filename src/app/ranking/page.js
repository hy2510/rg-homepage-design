"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("/ranking/points-rank");
  };

  return <main>{moveToPage()}</main>;
}
