import stylesMobile from "./theme-list_m.module.scss";
import stylesPc from "./theme-list.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AlertBar } from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 학습메인 > 사용자의 학습레벨의 주제 리스트
export function ThemeList({ children }) {
  return (
    <div className={style.theme_list}>
      <div className={style.txt_h}>주제별 도서</div>
      <AlertBar>도서를 주제별로 찾아볼 수 있어요!</AlertBar>
      <div className={style.theme_list_container}>{children}</div>
    </div>
  );
}

// 학습메인 > 사용자의 학습레벨의 주제 아이템
export function ThemeListItem({ themeImgSrc, href, title }) {
  return (
    <Link href={href ? href : "/"}>
      <div className={style.theme_list_item}>
        <div className={style.txt_title}>{title}</div>
        <Image
          alt=""
          src={themeImgSrc}
          layout="intrinsic"
          width={400}
          height={200}
        />
      </div>
    </Link>
  );
}
