"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const moveToPage = () => {
    const router = useRouter();
    router.push("/home/customer-review/student");
  };

  return moveToPage();
}
