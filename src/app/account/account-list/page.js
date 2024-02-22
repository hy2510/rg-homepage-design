"use client";

import Link from "next/link";
import Image from "next/image";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { useState } from "react";
import { Flamenco } from "next/font/google";
import { Button, TextField } from "@/components/common/common-components";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const MoreButton = () => {
    const [isMenuOpen, _isMenuOpen] = useState(false);

    const MoreItem = ({ children, onClick }) => {
      return (
        <div className={style.more_item} onClick={onClick}>
          {children}
        </div>
      );
    };

    const CheckButton = ({ text }) => {
      const [isChecked, _isChecked] = useState(true);

      return (
        <div
          onClick={() => {
            isChecked ? _isChecked(false) : _isChecked(true);
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {text}
          {isChecked ? (
            <Image
              alt=""
              src={"/src/images/check-icons/check_box_on.svg"}
              width={24}
              height={24}
            />
          ) : (
            <Image
              alt=""
              src={"/src/images/check-icons/check_box_off.svg"}
              width={24}
              height={24}
            />
          )}
        </div>
      );
    };

    return (
      <div
        className={style.more_button}
        onClick={() => {
          !isMenuOpen && _isMenuOpen(true);
        }}
      >
        {isMenuOpen ? (
          <>
            <div className={style.more_items_container}>
              <MoreItem>
                <CheckButton text={"입장시 비밀번호 입력하기"} />
              </MoreItem>
              <MoreItem>
                <span
                  style={{ color: "#b3b9c2" }}
                  onClick={() => {
                    confirm("선택한 계정을 목록에서 삭제하시겠어요?");
                  }}
                >
                  목록에서 계정 삭제
                </span>
              </MoreItem>
            </div>
            <div
              className={style.screen_block}
              onClick={() => {
                isMenuOpen ? _isMenuOpen(false) : _isMenuOpen(true);
              }}
            ></div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  };

  const AccountCard = ({
    userAvatar,
    userId,
    userName,
    userGroup,
    userGrade,
  }) => {
    const [viewPasswordInput, _viewPasswordInput] = useState(false);

    const PasswordInput = ({ userName, onClick }) => {
      return (
        <div className={style.password_input}>
          <div className={style.password_input_modal}>
            <div className={style.user_info_on_passowrd_input}>
              <div>
                <div className={style.user_name}>{userName}</div>
                <div className={style.user_info_more}>{userGroup}</div>
              </div>
              <div className={style.user_id}>{userId}</div>
            </div>
            <TextField password hint={"비밀번호 입력"} />
            <Button shadow color={"red"}>
              로그인
            </Button>
            <div className={style.row_box}>
              <Link href={""}>비밀번호 찾기</Link>
            </div>
          </div>
          <div className={style.screen_block} onClick={onClick}></div>
        </div>
      );
    };

    return (
      <div className={style.account_card}>
        {/* 비밀번호를 치고 로그인을 해야하는 상태 표시 */}
        {/* <div className={style.auto_login_lock}>
        </div> */}
        {/* 오토 로그인 상태 표시 */}
        <div className={style.auto_login_unlock}></div>
        <MoreButton />
        <div
          className={style.user_avatar}
          onClick={() => {
            _viewPasswordInput(true);
          }}
        >
          <Image alt="" src={userAvatar} width={150} height={150} />
        </div>
        <div
          className={style.user_info}
          onClick={() => {
            _viewPasswordInput(true);
          }}
        >
          <div className={style.user_name}>{userName}</div>
          <div className={style.user_id}>( {userId} )</div>
        </div>
        <div className={style.user_info_more}>{userGroup}</div>
        {viewPasswordInput && (
          <PasswordInput
            userName={userName}
            onClick={() => {
              _viewPasswordInput(false);
              console.log(viewPasswordInput);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <main className={style.account_list}>
      <div className={style.catchphrase}>
        <div className={style.brand_name}>리딩게이트</div>
        <div className={style.sentence}>읽는 즐거움, 커가는 영어실력</div>
      </div>
      <div className={`${style.account_card_list} container compact`}>
        <AccountCard
          userName={"이호열"}
          userId={"hy2510@gmail.com"}
          userAvatar={
            "https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/koon_08.png"
          }
          userGroup={"개인회원"}
        />
        <AccountCard
          userName={"위인선"}
          userId={"2024위인선"}
          userAvatar={
            "https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_08.png"
          }
          userGroup={"위례초등학교"}
        />
      </div>
      <div className={style.add_account}>
        <Link
          href="./sign-in/personal-member"
          className={style.add_account_button}
        >
          <div className={style.plus_icon}>
            <Image
              alt=""
              src="/src/images/plus-icons/plus-circle-blue.svg"
              width={24}
              height={24}
            />
          </div>
          <div className={style.txt_label}>계정추가</div>
        </Link>
      </div>
    </main>
  );
}
