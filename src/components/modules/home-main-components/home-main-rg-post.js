import Image from "next/image";
import Link from "next/link";
import stylesMobile from "./home-main-rg-post_m.module.scss";
import stylesPc from "./home-main-rg-post.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export const RgPostContainer = ({ children }) => {
  return (
    <div className={style.rg_post_container}>
      <div className={style.row_1}>
        <div className={style.txt_1}>RG 포스트</div>
      </div>
      <div className={style.row_2}>{children}</div>
    </div>
  );
};

export const RgPostItem = ({ imgSrc, href, target }) => {
  return (
    <Link href={href ? href : ""} target={target ? target : "_blank"}>
      <div className={style.rg_post_item}>
        <Image alt="" src={imgSrc} width={200} height={100} loading="lazy" />
      </div>
    </Link>
  );
};
