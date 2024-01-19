"use client";

import Link from "next/link";
import Image from "next/image";
import stylesPc from "./home-main-main-banner.module.scss";
import { useEffect, useState } from "react";
import { Oregano } from "next/font/google";

const style = stylesPc;

export default function MainBanner({ data }) {
  const mainBannerData = [
    {
      name: "1",
      imgSrc:
        "https://wcfresource.a1edu.com/newsystem/image/slidingbanner/private/janaf.png?ver=240118013056",
      href: "https://brand.naver.com/readinggate/products/5669195284?nt_source=sns_ad&nt_medium=afhome_main",
      target: "_blank",
    },
    {
      name: "2",
      imgSrc:
        "https://wcfresource.a1edu.com/newsystem/image/slidingbanner/private/2024_superstar_banner_end.png?ver=240118013056",
      href: "",
      target: "",
    },
    {
      name: "3",
      imgSrc:
        "https://wcfresource.a1edu.com/newsystem/image/slidingbanner/private/2023_2nd_rgkr_banner.png?ver=240118035628",
      href: "https://www.readinggate.com/News/LibraryBoardNotice?notifytype=094001&no=1621",
      target: "",
    },
    {
      name: "4",
      imgSrc:
        "https://wcfresource.a1edu.com/newsystem/image/slidingbanner/common/banner_newbook_eng.png?ver=240118035628",
      href: "https://www.readinggate.com/News/NewBooks",
      target: "",
    },
  ];

  const [order, _order] = useState(0);
  const [aniFx, _aniFx] = useState("fade-in");

  const MainBannerItem = ({ imgSrc, href, target }) => {
    return (
      <Link href={href ? href : ""} target={target ? target : "_self"}>
        <div className={`${style.main_banner_item} ${aniFx}`}>
          <Image alt="" src={imgSrc} width={1000} height={350} loading="lazy" />
        </div>
      </Link>
    );
  };

  const Indicator = () => {
    return (
      <div className={style.indicator}>
        <div className={style.arrows}>
          <div
            className={style.btn_left}
            onClick={() => {
              _order(order == 0 ? mainBannerData.length - 1 : order - 1);
            }}
          ></div>
          <div
            className={style.btn_right}
            onClick={() => {
              _order(order < mainBannerData.length - 1 ? order + 1 : 0);
            }}
          ></div>
        </div>
        <div className={style.status}>
          {order + 1} / {mainBannerData.length}
        </div>
      </div>
    );
  };

  return (
    <div className={style.main_banner}>
      <MainBannerItem
        imgSrc={mainBannerData[order].imgSrc}
        href={mainBannerData[order].href}
        target={mainBannerData[order].target}
      />
      <Indicator />
    </div>
  );
}
