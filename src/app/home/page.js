"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("/home/main");
  };

  return <main>{moveToPage()}</main>;
}
