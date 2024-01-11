import Image from "next/image";
import style from "./course-list.module.scss";
import {
  FilterContainer,
  FilterItem,
} from "@/components/common/common-components";

// 코스 리스트
export function CourseList({ passedNum, totalNum, children }) {
  return (
    <>
      <div className={style.row_a}>
        <div className={style.row_a_container}>
          <div className={style.txt_h}>완료한 학습</div>
          <div className={style.completed_status}>
            <div className={style.txt_l1}>{passedNum}</div>
            <div className={style.txt_l2}>/{totalNum}</div>
          </div>
        </div>
      </div>
      <div>인트로 영상</div>
      <div className={style.course_list}>{children}</div>
      <div>아웃트로 영상</div>
    </>
  );
}

// 코스 아이템
export function CourseItem({
  prevNum,
  currentNum,
  imgSrc,
  title,
  vocaSrc,
  passCount,
  bookCode,
  studyData,
}) {
  return (
    <div className={style.course_item}>
      <div className={style.col_a}>
        <div className={style.check_study}>
          <div className={style.status}>
            <div
              className={`${style.streak_front} ${
                prevNum == -1
                  ? undefined
                  : studyData[prevNum].passed === "Y" && style.prev_passed
              }`}
            ></div>
            {studyData[currentNum].passed === "Y" ? (
              <Image
                alt=""
                src="/src/images/@course-list/study_passed.svg"
                width={50}
                height={50}
              />
            ) : (
              <Image
                alt=""
                src="/src/images/@course-list/study_ready.svg"
                width={50}
                height={50}
              />
            )}

            <div
              className={`${style.streak_back} ${
                studyData[currentNum].passed === "Y" && style.passed
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`${style.cover} ${
            prevNum == -1
              ? undefined
              : studyData[prevNum].passed === "Y" &&
                studyData[currentNum].passed === "N"
              ? style.heartbeat
              : undefined
          } ${
            currentNum == 0
              ? studyData[currentNum].passed === "N" && style.heartbeat
              : undefined
          }`}
        >
          <Image
            alt=""
            src={imgSrc}
            layout="intrinsic"
            width={300}
            height={170}
            className={`${
              prevNum == -1
                ? undefined
                : studyData[prevNum].passed === "Y" &&
                  studyData[currentNum].passed === "N"
                ? style.done
                : style.ready
            } ${studyData[currentNum].passed === "Y" && style.done}`}
          />
        </div>
        <div className={style.txt_h}>{title}</div>
      </div>
      <div className={style.col_b}>
        <div
          className={`${style.button} ${
            prevNum == -1
              ? undefined
              : studyData[prevNum].passed === "Y" &&
                studyData[currentNum].passed === "N"
              ? style.voca_download
              : style.voca_download_ready
          } ${
            currentNum == 0
              ? studyData[currentNum].passed === "N"
                ? style.voca_download
                : style.voca_download_ready
              : undefined
          }`}
        >
          <Image
            src="/src/images/@course-list/download.svg"
            width={20}
            height={20}
          />
        </div>
        <div
          className={`${style.button} ${
            prevNum == -1
              ? undefined
              : studyData[prevNum].passed === "Y" &&
                studyData[currentNum].passed === "N"
              ? style.start
              : style.start_ready
          } ${studyData[currentNum].passed === "Y" && style.review} ${
            currentNum == 0
              ? studyData[currentNum].passed === "N" && style.start
              : undefined
          }`}
        >
          {studyData[currentNum].passed === "Y" ? "복습" : "시작"}
        </div>
      </div>
    </div>
  );
}
