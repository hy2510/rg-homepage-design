"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckBox, TextField } from "@/components/common/common-components";
import styledPc from "./page.module.scss";
import { useState } from "react";

const style = styledPc;

export default function Page() {
  // 수정하기 기능이 있는 텍스트 필드
  const EditTextField = ({
    hint,
    value,
    disabled,
    editMessage,
    saveMessage,
    password,
    email,
  }) => {
    const [editText, _editText] = useState(true);

    return (
      <div className={style.edit_text_field}>
        <div
          className={style.btn_edit}
          onClick={() => {
            editText
              ? _editText(false)
              : saveMessage == "본인인증"
              ? _editText(false)
              : _editText(true);
          }}
        >
          {editText ? (
            editMessage
          ) : (
            <span className={style.text_blue}>{saveMessage}</span>
          )}
        </div>
        <TextField
          hint={hint}
          value={value}
          disabled={editText}
          password={password}
          email={email}
        />
      </div>
    );
  };

  // 비밀번호 변경하기
  const EditChangePassword = () => {
    const [isChangePassword, _isChangePassword] = useState(false);

    return (
      <div className={style.edit_change_password}>
        {isChangePassword == false ? (
          <>
            <div
              className={style.btn_edit}
              onClick={() => {
                _isChangePassword(true);
              }}
            >
              편집
            </div>
            <TextField
              hint={"비밀번호"}
              value={"dnldlstjs8282"}
              disabled
              password
            />
          </>
        ) : (
          <div className={style.input_password}>
            <div className={style.row_1}>
              <TextField hint={"현재 비밀번호"} password />
            </div>
            <div className={style.row_2}>
              <div className={style.btn_edit}>
                <div
                  className={style.text_blue}
                  onClick={() => {
                    _isChangePassword(false);
                  }}
                >
                  취소
                </div>
                <div className={style.text_blue}>변경</div>
              </div>
              <TextField hint={"변경할 비밀번호"} password />
            </div>
          </div>
        )}
      </div>
    );
  };

  // 아코디언 아이템
  const AccordionItem = ({ headerContents, bodyContents }) => {
    return (
      <div className={style.accordion_item}>
        <div className={style.header}>
          <div className={style.header_text}>{headerContents}</div>
          <div className={style.btn_toggle}>
            {/* <Image
              alt=""
              src="/src/images/arrow-icons/chv_down.svg"
              width={20}
              height={20}
            /> */}
          </div>
        </div>
        <div className={style.body_contents}>{bodyContents}</div>
      </div>
    );
  };

  return (
    <main className={`${style.account_info} container compact`}>
      <div className={style.heading}>계정정보</div>
      <div className={style.contents}>
        {/* 회원 & 결제 정보 */}
        <div className={style.sub_title}>회원, 결제 정보</div>
        <div className={`${style.description} ${style.include_link}`}>
          <div className={style.lable_text}>남은 학습 기간: 20일,</div>
          <div className={style.lable_text}>학습 만료일: 2024-10-10</div>
          <Link
            href="https://www.readinggate.com/Payment/Price"
            target="_blank"
            className={style.link_text}
          >
            결제하기
          </Link>
        </div>
        <div className={style.form_box}>
          <EditTextField
            hint={"학생이름"}
            value={"위인선"}
            editMessage={"편집"}
            saveMessage={"저장"}
          />
          <div>
            <TextField hint={"E-Mail(ID)"} value={"wii@rg.com"} disabled />
          </div>

          {/* 비밀번호 변경 */}
          <EditChangePassword />
          {/* 전화번호가 있는 경우 */}
          {/* <EditTextField
            hint={"휴대전화번호"}
            value={"01012345678"}
            editMessage={"편집"}
            saveMessage={"본인인증"}
          /> */}
          {/* 전화번호가 없는 경우 */}
          <EditTextField
            hint={`휴대전화번호 ("-" 없이 입력)`}
            value={""}
            editMessage={"입력"}
            saveMessage={"본인인증"}
          />
        </div>
        <div className={style.check}>
          {/* 전화번호가 없는 경우 체크박스를 눌렀을 때 경고창 출력: 학습 리포트, 소식 등 알림을 받으려면 수신할 휴대전화번호가 필요합니다. 연락처 칸에서 휴대전화번호를 등록해 주세요. [확인] */}
          <CheckBox />
          학습 리포트, 소식 등 알림 받기
        </div>
        <div className={style.accordion_box}>
          <AccordionItem
            headerContents={"결제 상세 정보"}
            bodyContents={"블라블라"}
          />
          <AccordionItem
            headerContents={"학습 일시 중지"}
            bodyContents={"블라블라"}
          />
          <AccordionItem
            headerContents={"회원 탈퇴"}
            bodyContents={"블라블라"}
          />
        </div>
      </div>
    </main>
  );
}
