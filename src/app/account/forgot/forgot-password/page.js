"use client";

import {
  BackLink,
  Button,
  Nav,
  NavItem,
  TextField,
} from "@/components/common/common-components";
import { useState } from "react";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const [navActive, _navActive] = useState("email");

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

  const FindById = () => {
    return (
      <>
        <div className={style.comment}>
          * 회원 정보에 등록한 아이디를 입력해 주세요.
        </div>
        <TextField hint={"아이디"} />
        <Button shadow>확인</Button>
      </>
    );
  };

  return (
    <main className={style.forgot_password}>
      <BackLink>비밀번호 찾기</BackLink>
      <Nav>
        <NavItem
          active={navActive == "email"}
          onClick={() => {
            _navActive("email");
          }}
        >
          E-Mail로 찾기
        </NavItem>
        <NavItem
          active={navActive == "id"}
          onClick={() => {
            _navActive("id");
          }}
        >
          아이디로 찾기
        </NavItem>
      </Nav>
      {navActive == "email" && <FindByEmailAddress />}
      {navActive == "id" && <FindById />}
    </main>
  );
}
