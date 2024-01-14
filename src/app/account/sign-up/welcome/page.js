"use client";

import { useState } from "react";
import stylesPc from "./page.module.scss";
import {
  BackLink,
  Button,
  CheckBox,
  TextField,
} from "@/components/common/common-components";

const style = stylesPc;

export default function Page() {
  const userInfo = {
    name: "박은경",
    signInID: "pek208@readinggate.com",
    joinDate: "2023-08-08",
    endDate: "7",
  };

  return (
    <main className={style.welcome}>
      <div className={style.txt_title}>회원가입 완료</div>
      <div className={style.txt_sub_title}>회원정보</div>
      <div className={style.member_info_box}>
        <div>이름</div>
        <div>{userInfo.name}</div>
        <div>로그인 ID</div>
        <div>{userInfo.signInID}</div>
        <div>가입일</div>
        <div>{userInfo.joinDate}</div>
        <div>남은 학습 기간</div>
        <div>{userInfo.endDate}일</div>
      </div>
      <div className={style.comment}>
        <span>
          * 학습 결과 리포트, 정기적인 소식 등 유용한 정보를 받으시겠어요?
        </span>
        <span
          style={{ color: "#0062e3", cursor: "pointer", fontWeight: "500" }}
        >
          소식받기
        </span>
      </div>

      <Button
        shadow
        onClick={() => {
          location.href = "/library/explore";
        }}
      >
        학습 둘러보기
      </Button>
      <div className={style.link_button_container}>
        <div className={style.link_button}>홈페이지</div>
      </div>
    </main>
  );
}
