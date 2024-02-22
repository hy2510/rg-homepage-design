"use client";

import Image from "next/image";

import {
  Margin,
  NoticeBoardContainer,
  NoticeBoardItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();

export default function Page() {
  const data = [
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
    {
      title: "[캠페인] 자랑스러운 리게인을 찾습니다!",
      date: "2024/3/31",
      href: "/home/main/rg-news-post",
    },
  ];

  return (
    <div>
      <NoticeBoardContainer>
        {data.map((a) => {
          return (
            <NoticeBoardItem title={a.title} date={a.date} href={a.href} />
          );
        })}
      </NoticeBoardContainer>
      <Margin height={isMobile ? 15 : 30} />
      <Pagination>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
        <PaginationItem active={true}>1</PaginationItem>
        <PaginationItem active={false}>2</PaginationItem>
        <PaginationItem active={false}>3</PaginationItem>
        <PaginationItem active={false}>4</PaginationItem>
        <PaginationItem active={false}>5</PaginationItem>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
}
