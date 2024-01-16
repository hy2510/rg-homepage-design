"use client";

import { useState } from "react";
import stylesPc from "./page.module.scss";
import {
  AlertBar,
  BackLink,
  Button,
  CheckBox,
  TextField,
} from "@/components/common/common-components";

const style = stylesPc;

export default function Page() {
  const CheckField = ({ children }) => {
    const [checked, _checked] = useState(false);

    return (
      <div className={style.check_field}>
        <CheckBox
          check={checked}
          onClick={() => {
            checked ? _checked(false) : _checked(true);
          }}
        />
        <span>{children}</span>
      </div>
    );
  };

  return (
    <main className={style.step1}>
      <BackLink>리딩게이트 회원가입</BackLink>
      <AlertBar>
        가입특혜: 가입일로 부터 7일간 무료사용 (레벨테스트 제외)
      </AlertBar>
      <div className={style.sign_up_form}>
        <div className={style.comment}>
          * 리딩게이트 학습을 하게될 학생의 이름을 입력해 주세요.
        </div>
        <TextField hint={"학생 이름"} />
        <div className={style.comment}>
          * 로그인 ID로 사용할 E-Mail 주소를 입력해 주세요.
        </div>
        <TextField hint={"E-Mail (예: student@readinggate.com)"} />
        <div className={style.comment}>
          * 비밀번호는 영문 숫자 조합 8~20글자로 입력해 주세요.
        </div>
        <TextField hint={"비밀번호"} password />
        <div className={style.comment}>
          * 입력한 비밀번호를 한번 더 입력해 주세요.
        </div>
        <TextField hint={"비밀번호 확인"} password />
        <CheckField>[필수] 본 회원가입 작성자는 만 14세 이상입니다.</CheckField>
        <CheckField>
          [필수]{" "}
          <span
            style={{ color: "#0062e3", cursor: "pointer", fontWeight: "500" }}
          >
            이용약관
          </span>
          을 확인하였으며 해당 내용에 동의 합니다.
        </CheckField>
        <CheckField>
          [필수]{" "}
          <span
            style={{
              color: "#0062e3",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            개인정보 처리방침
          </span>
          을 확인하였으며 해당 내용에 동의 합니다.
        </CheckField>
        <Button
          shadow
          onClick={() => {
            location.href = "step2";
          }}
        >
          계속하기
        </Button>
      </div>
    </main>
  );
}
