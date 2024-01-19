import Image from "next/image";
import stylesPc from "./review-detail-view-search-box.module.scss";

const style = stylesPc;

// 상세보기 리포트 검색박스
export const ReportSearchBox = ({ onClick }) => {
  return (
    <div className={style.report_search_box}>
      <div className={style.column1}>
        <div className={style.period}>
          <div className={style.start_date}>
            <input type="date" />
          </div>
          <div>~</div>
          <div className={style.end_date}>
            <input type="date" />
          </div>
        </div>
        <div className={style.search_bar}>
          <input type="text" placeholder="도서 또는 시리즈명" />
        </div>
      </div>
      <button onClick={onClick} className={style.search_button}>
        <Image
          alt=""
          src="/src/images/search-icons/search_white.svg"
          width={20}
          height={20}
        />
        <span className={style.button_text}>검색하기</span>
      </button>
    </div>
  );
};
