"use client";

import {
  BackLink,
  Button,
  Nav,
  NavItem,
  TextField,
} from "@/components/common/common-components";
import { useState } from "react";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Page() {
  const [navActive, _navActive] = useState("phone");

  const FindByPhoneNumber = () => {
    return (
      <>
        <div className={style.comment}>
          * 회원 정보에 등록한 연락처(휴대전화 번호)를 입력해 주세요.
        </div>
        <TextField hint={"연락처"} />
        <Button shadow>확인</Button>
      </>
    );
  };

  const FindByEmailAddress = () => {
    return (
      <>
        <div className={style.comment}>
          * 회원 정보에 등록한 E-Mail 주소를 입력해 주세요.
        </div>
        <TextField hint={"E-Mail"} />
        <Button shadow>확인</Button>
      </>
    );
  };

  return (
    <main className={style.forgot_id}>
      <BackLink>아이디 찾기</BackLink>
      <Nav>
        <NavItem
          active={navActive == "phone"}
          onClick={() => {
            _navActive("phone");
          }}
        >
          연락처로 찾기
        </NavItem>
        <NavItem
          active={navActive == "email"}
          onClick={() => {
            _navActive("email");
          }}
        >
          E-Mail로 찾기
        </NavItem>
      </Nav>
      {navActive == "phone" && <FindByPhoneNumber />}
      {navActive == "email" && <FindByEmailAddress />}
    </main>
  );
}
