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
  const userEmail = "pek208@readinggate.com";

  return (
    <main className={style.step2}>
      <BackLink href="step1">본인인증</BackLink>
      <div className={style.sending_message}>
        <b>* {userEmail}</b>
        <span>
          로 인증코드를 발송했습니다. 현 시간 기준, 10분 안에 인증을 완료해
          주세요.
        </span>
      </div>
      <TextField hint={"인증코드 입력"} />
      <Button
        shadow
        onClick={() => {
          location.href = "welcome";
        }}
      >
        인증하기
      </Button>
      <div className={style.link_button_container}>
        <div className={style.link_button}>인증코드 재전송하기</div>
      </div>
    </main>
  );
}
