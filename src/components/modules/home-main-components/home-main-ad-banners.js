import Image from "next/image";
import Link from "next/link";
import stylesPc from "./home-main-ad-banners.module.scss";

const style = stylesPc;

export const AdBannersGroup = ({ children }) => {
  return <div className={style.ad_banners_group}>{children}</div>;
};

export const AdBannerType1 = ({ bgColor, children, href, target }) => {
  return (
    <Link href={href ? href : ""} target={target ? target : "_self"}>
      <div
        className={style.ad_banner_type_1}
        style={{
          backgroundColor: bgColor ? bgColor : "#fff",
        }}
      >
        {children}
      </div>
    </Link>
  );
};

export const AdBannerType2 = ({
  bgColor,
  children,
  href,
  target,
  txt1,
  txt2,
  imgSrc,
}) => {
  const Menual = () => {
    return (
      <div className={style.ad_banner_type_2_menual}>
        <div className={style.col_1}>
          <div className={style.txt_1}>{txt1}</div>
          <div className={style.txt_2}>{txt2}</div>
        </div>
        <div className={style.col_2}>
          <div className={style.symbol_image}>
            <Image alt="" src={imgSrc} width={70} height={70} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Link href={href ? href : ""} target={target ? target : "_self"}>
      <div
        className={style.ad_banner_type_2}
        style={{ backgroundColor: bgColor }}
      >
        {children ? children : <Menual />}
      </div>
    </Link>
  );
};
