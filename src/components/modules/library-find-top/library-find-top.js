import stylesMobile from "./library-find-top_m.module.scss";
import stylesPc from "./library-find-top.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export function LibraryFindTop({ title, imgSrc }) {
  return (
    <div className={style.library_find_top}>
      {/* style={{ backgroundImage: `url(${imgSrc})` }} */}
      <div className={style.light_box}>{title}</div>
    </div>
  );
}
