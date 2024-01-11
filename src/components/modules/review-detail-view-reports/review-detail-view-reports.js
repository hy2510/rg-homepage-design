import Image from "next/image";
import stylesPc from "./review-detail-view-reports.module.scss";

const style = stylesPc;

// 상세보기 리포트 리스트
export const DetailedReportsList = ({ children }) => {
  return <div className={style.detailed_reports_list}>{children}</div>;
};

// 상세보기 리포트 아이템
export const DetailedReportItem = ({
  imgSrc,
  bookCode,
  title,
  studyDate,
  totalScore,
  isPassed,
  completedInfo,
  earnPoints,
}) => {
  return (
    <div className={style.detailed_report_item}>
      <div className={style.book_cover}>
        <Image
          src={imgSrc}
          layout="intrinsic"
          width={140}
          height={140}
          style={{ backgroundColor: "#ccc" }}
        />
      </div>
      <div className={`${style.report} ${isPassed ? style.pass : style.fail}`}>
        <div className={style.report_container}>
          <div className={style.col1}>
            <div className={style.book_code}>{bookCode}</div>
            <div className={style.title}>{title}</div>
          </div>
          <div className={style.col2}>
            <div className={style.label}>학습일</div>
            <div className={style.contents}>{studyDate}</div>
            <div className={style.label}>총점</div>
            <div className={style.contents}>{totalScore}</div>
            <div className={style.label}>학습결과</div>
            <div className={style.contents}>
              {isPassed ? "PASS /" : "FAIL"} {completedInfo} (
              {isPassed ? "+" + earnPoints + "P" : 0})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
