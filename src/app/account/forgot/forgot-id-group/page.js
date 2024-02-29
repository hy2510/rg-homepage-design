"use client";

import {
  BackLink,
  Button,
  FormDropDown,
  TextField,
} from "@/components/common/common-components";
import stylesPc from "./page.module.scss";
import { useState } from "react";
import BoxUserInfo from "@/components/modules/account-components/box-user-info";

const style = stylesPc;

// 그룸회원 아이디 찾기 1단계 - 정보입력
function ForgotIdForm() {
  return (
    <div className={style.forgot_id_form}>
      <div className={style.txt_heading}>정보 입력</div>
      <div className={style.group_select_grade}>
        <FormDropDown label={"학년"} select={["1학년", "2학년", "3학년"]} />
        <FormDropDown label={"소속반"} select={["1-1", "1-2", "1-3"]} />
      </div>
      <TextField id={"user-name"} hint={"학생 이름 입력"} />
      <Button color={"blue"} shadow width={"100%"}>
        아이디 찾기
      </Button>
    </div>
  );
}

// 그룸회원 아이디 찾기 2단계 - 결과
function ForgotIdFindResult({ children }) {
  return (
    <div className={style.forgot_id_find_result}>
      <div className={style.txt_heading}>아이디 찾기 결과</div>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className={style.forgot_id_group}>
      <BackLink>아이디 찾기</BackLink>
      <ForgotIdForm />
      <ForgotIdFindResult>
        <BoxUserInfo
          name={"위인선"}
          signInID={"2024위인선"}
          groupClass={"1-1반"}
        />
      </ForgotIdFindResult>
    </main>
  );
}
