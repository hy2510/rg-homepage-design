"use client";

import React from "react";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import Link from "next/link";
import { useState } from "react";
import {
  BackLink,
  Button,
  Dropdown,
  DropdownItem,
  FormDropDown,
  Nav,
  NavItem,
  TextField,
} from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  // 0: 국가선택, 1: 개인회원로그인, 2: 그룹회원검색, 3: 그룹회원로그인
  const [viewState, _viewState] = useState(0);

  // 로그인박스
  const LogInBox = ({ children }) => {
    return <div className={style.log_in_box}>{children}</div>;
  };

  // 국가 선택 (앱의 경우 출력)
  const CountrySelection = () => {
    return (
      <div className={style.country_selection}>
        <div className={style.txt_sentence}>
          서비스 이용을 위해 <b>접속할 국가</b>를 선택해 주세요.
        </div>
        <div
          className={style.item_country}
          onClick={() => {
            _viewState(1);
          }}
        >
          대한민국
        </div>
        <div className={style.item_country}>Việt Nam</div>
        <div className={style.item_country}>Indonesia</div>
      </div>
    );
  };

  // 개인회원 로그인
  const LogInPersonalMember = () => {
    return (
      <div className={style.log_in_personal_member}>
        {/* 드랍다운 메뉴는 앱일때 표시 */}
        <FormDropDown
          label={"접속국가"}
          select={["대한민국", "Việt Nam", "Indonesia"]}
        />
        <TextField id={"user-id"} hint={"아이디 (또는 e-mail)"} />
        <TextField id={"user-passowrd"} hint={"비밀번호"} password />
        <Button color={"red"} shadow>
          로그인
        </Button>
        <div className={style.row_box}>
          <Link href={"./forgot/forgot-id"}>아이디 찾기</Link>
          <Link href={"./forgot/forgot-password"}>비밀번호 찾기</Link>
        </div>
        <div className={style.comment}>
          ❗️ 학교나 학원에서 사용 안내를 받은 경우, 그룹 회원 탭에서 검색 후
          로그인 하세요.
        </div>
      </div>
    );
  };

  // 그룹회원검색
  const GroupFinder = () => {
    const [printSeachResult, _printSeachResult] = useState(false);

    // 샘플 데이터
    const searchResultData = [
      { schoolName: "수내초등학교" },
      { schoolName: "수내중학교" },
      { schoolName: "수내고등학교" },
    ];

    // 검색 결과
    const SearchResult = ({ searchResultData }) => {
      const data = searchResultData;

      const SchoolCardItem = ({ schoolName }) => {
        return (
          <div
            className={style.school_card_item}
            onClick={() => {
              _viewState(3);
            }}
          >
            • {schoolName}
          </div>
        );
      };

      return (
        <div className={style.search_result_data}>
          <div className={style.txt_title}>검색 결과</div>
          {data ? (
            data.map((a) => {
              return <SchoolCardItem schoolName={a.schoolName} />;
            })
          ) : (
            <div style={{ color: "gray" }}>
              검색 결과가 없습니다. 검색한 학교, 학원 이름을 다시 확인해 보세요.
            </div>
          )}
        </div>
      );
    };

    return (
      <div className={style.group_member}>
        <TextField id={"user-id"} hint={"학교 또는 학원 이름 검색"} />
        <Button
          color={"red"}
          shadow
          onClick={() => {
            _printSeachResult(true);
          }}
        >
          검색하기
        </Button>
        {printSeachResult ? (
          <SearchResult searchResultData={searchResultData} />
        ) : (
          <></>
        )}
      </div>
    );
  };

  // 그룹회원 로그인
  const LogInGroupMember = ({ schoolName }) => {
    return (
      <div className={style.logIn_group_member}>
        {/* 앱일때 표시 */}
        <BackLink
          onClick={() => {
            _viewState(2);
          }}
        >
          {schoolName}
        </BackLink>
        {/* 앱이 아닐때 표시 */}
        {/* <div className={style.txt_school_name}>{schoolName}</div> */}
        <TextField id={"user-id"} hint={"아이디"} />
        <TextField id={"user-passowrd"} hint={"비밀번호"} password />
        <Button shadow>로그인</Button>
        <div className={style.row_box}>
          <Link href={"/"}>아이디 찾기</Link>
          <Link href={"/"}>비밀번호 찾기</Link>
        </div>
        <div className={style.comment}>
          ❗️ '{schoolName}'에서 재학중인 학생만 이용할 수 있어요. <br />
          ❗️ 아이디와 비밀번호는 '{schoolName}'에서 발급해 드려요.
        </div>
      </div>
    );
  };

  return (
    <main className={style.sign_in}>
      <div className={style.catchphrase}>
        <div className={style.brand_name}>리딩게이트</div>
        <div className={style.sentence}>읽는 즐거움, 커가는 영어실력</div>
      </div>
      <LogInBox>
        <Nav>
          <NavItem
            active={viewState == 0 || viewState == 1}
            onClick={() => {
              _viewState(0);
            }}
          >
            개인 회원
          </NavItem>
          <NavItem
            active={viewState == 2 || viewState == 3}
            onClick={() => {
              _viewState(2);
            }}
          >
            그룹 회원{" "}
            <span style={{ fontSize: "0.8em", fontWeight: 500 }}>
              (학교, 학원)
            </span>
          </NavItem>
        </Nav>
        {/* 국가 선택 */}
        {viewState == 0 && <CountrySelection />}
        {/* 개인회원 로그인 */}
        {viewState == 1 && <LogInPersonalMember />}
        {/* 그룹회원 찾기 */}
        {/* <GroupFinder /> */}
        {viewState == 2 && <GroupFinder />}
        {/* 그룹회원 로그인 */}
        {viewState == 3 && <LogInGroupMember schoolName={"수내초등학교"} />}
      </LogInBox>
    </main>
  );
}
