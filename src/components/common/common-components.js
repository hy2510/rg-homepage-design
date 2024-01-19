"use client";

import { Flamenco } from "next/font/google";
import style from "./common-components.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 기본버튼
export function Button({ color, shadow, roundFull, width, onClick, children }) {
  let buttonColor;
  switch (color) {
    case "red":
      buttonColor = style.red;
      break;
    case "blue":
      buttonColor = style.blue;
      break;
    case "gray":
      buttonColor = style.gray;
      break;
    case "dark":
      buttonColor = style.dark;
      break;
    default:
      buttonColor = style.blue;
      break;
  }

  return (
    <div
      className={`${style.bs_button} ${buttonColor} ${shadow && style.shadow} ${
        roundFull && style.round_full
      }`}
      onClick={onClick}
      style={{ width: width }}
    >
      {children}
    </div>
  );
}

// 뒤로가기
export function BackLink({ href, largeFont, children, onClick, colorWhite }) {
  return (
    <div className={style.back_link}>
      <Link
        href={href ? href : "javascript:history.back();"}
        onClick={onClick ? onClick : null}
      >
        <div className={style.back_link}>
          {colorWhite ? (
            <Image
              alt=""
              src="/src/images/arrow-icons/chv_left_white.svg"
              width={26}
              height={26}
            />
          ) : (
            <Image
              alt=""
              src="/src/images/arrow-icons/chv_left.svg"
              width={26}
              height={26}
            />
          )}
          <div
            className={`${largeFont ? style.txt_d2 : style.txt_d1}`}
            style={{ color: colorWhite ? "#fff" : "" }}
          >
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
}

// 얼럿바
export function AlertBar({ children }) {
  return (
    <div className={style.alert_bar}>
      {children}
      <div className={style.delete_button}>
        <Image
          alt=""
          src="/src/images/delete-icons/x_orange.svg"
          width={24}
          height={24}
        ></Image>
      </div>
    </div>
  );
}

// 얼럿박스
export function AlertBox({
  toolTipRight,
  toolTipLeft,
  text,
  onClickY,
  onClickN,
}) {
  return (
    <div
      className={`${style.alert_box} ${
        toolTipRight
          ? style.tool_tip_right_arrow
          : toolTipLeft
          ? style.tool_tip_left_arrow
          : undefined
      }`}
    >
      <div className={style.txt_l}>{text}</div>
      <div className={style.buttons}>
        <div className={style.button} onClick={onClickY}>
          예
        </div>
        <div className={style.button} onClick={onClickN}>
          아니오
        </div>
      </div>
    </div>
  );
}

// 텍스트필드
export function TextFiled(props) {
  return (
    <div
      className={`text-field ${props.border} ${
        props.disabled ? "disabled" : undefined
      }`}
      style={{ width: props.width }}
    >
      <div className="label">{props.label}</div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={{ width: props.width }}
        value={props.value}
        disabled={props.disabled}
        name={props.name}
      ></input>
    </div>
  );
}

// 네브
export function Nav({ children }) {
  return <div className={style.nav_container}>{children}</div>;
}

// 네브 아이템
export function NavItem({ active, onClick, width, children, toolTip }) {
  return (
    <div
      className={`${style.nav_item} ${active && style.on}`}
      onClick={onClick}
      style={{ width: width }}
    >
      <div className={style.nav_contents}>
        <span>
          {children}
          {toolTip == undefined ? undefined : (
            <div className={style.tool_tip}>{toolTip}</div>
          )}
        </span>
      </div>
    </div>
  );
}

// 필 네브
export function Pills({ children }) {
  return <div className={style.pill_container}>{children}</div>;
}

// 필 네브 아이템
export function PillItem({ active, children }) {
  return (
    <div className={`${style.pill_item} ${active && style.on}`}>{children}</div>
  );
}

// 페이지네이션
export function Pagination({ children }) {
  return (
    <nav aria-label="Page navigation">
      <ul className={style.pagination}>{children}</ul>
    </nav>
  );
}

// 페이지네이션 아이템
export function PaginationItem({ active, onClick, children }) {
  return (
    <li className={`${style.pagination_item} ${active && style.on}`}>
      <button onClick={onClick ? onClick : undefined}>{children}</button>
    </li>
  );
}

// 프로그레스바 (width: 프로그레스 길이 -> %로 표시, check: 체크포인트가 있는 경우, toolTip: 체크 포인트의 툴팁)
export function ProgressBar({ width, check, slim, toolTip }) {
  return (
    <div className={`${style.progress_bar} ${slim && style.slim}`}>
      <div
        className={`${style.progress} ${slim && style.slim}`}
        style={{ width: width }}
      >
        {!slim && <div className={style.pointer}>{width}</div>}
      </div>
      {check && (
        <div className={style.check} style={{ width: check }}>
          <div className={style.tool_tip}>{toolTip}</div>
        </div>
      )}
    </div>
  );
}

// 드랍다운
export function Dropdown({ inlineStyle, fontSizeM, title, children }) {
  const [check, _check] = useState(false);

  return (
    <div className="flex">
      <div
        className={style.dropdown}
        onClick={() => {
          check ? _check(false) : _check(true);
        }}
        style={inlineStyle}
      >
        <div className={`${style.title} ${fontSizeM && style.txt_h}`}>
          {title}
        </div>
        <Image
          alt=""
          src="/src/images/arrow-icons/chv_down.svg"
          width={20}
          height={20}
        />
        {check && <div className={style.menu}>{children}</div>}
      </div>
      {check && (
        <div
          className={style.transparent_box}
          onClick={() => {
            check == false ? _check(true) : _check(false);
          }}
        ></div>
      )}
    </div>
  );
}

// 드랍다운 아이템
export function DropdownItem({ onClick, children }) {
  return (
    <div className={style.dropdown_item} onClick={onClick && onClick}>
      {children}
    </div>
  );
}

// 텍스트필드
export function TextField({ id, hint, password, email, value, disabled }) {
  const [inputValue, _inputValue] = useState(value);

  return (
    <div className={`${style.text_field} ${disabled && style.val}`}>
      <div className={style.txt_l}>{inputValue && hint}</div>
      <input
        id={id}
        type={password ? "password" : email ? "emial" : "text"}
        value={inputValue}
        onChange={(e) => {
          _inputValue(e.target.value);
        }}
        disabled={disabled}
        placeholder={inputValue ? null : hint}
      />
    </div>
  );
}

// 셀렉트박스
export function SelectBox({ id, hint, children }) {
  return (
    <div className={style.select_box}>
      <div className={style.txt_l}>{hint}</div>
      <select id={id}>{children}</select>
    </div>
  );
}

// 셀렉트박스 아이템
export const SelectBoxItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// 모달 템플릿
export function Modal({
  compact,
  header,
  title,
  navTop,
  backLink,
  onClickDelete,
  onClickBack,
  onClickLightbox,
  children,
}) {
  return (
    <>
      <div className={style.modal}>
        <div
          className={`${style.modal_container} slide-in-top ${
            compact && style.compact
          }`}
        >
          {header && (
            <div className={style.modal_header}>
              <div className={style.modal_header_container}>
                <div className={style.txt_h}>{title}</div>
              </div>
              <button onClick={onClickDelete}>
                <Image
                  alt=""
                  src="/src/images/delete-icons/x_black.svg"
                  width="28"
                  height="28"
                />
              </button>
            </div>
          )}
          {navTop && (
            <div className={style.nav_top}>
              <div className={style.nav_top_back_link} onClick={onClickBack}>
                <div className={style.arrow_icon}>
                  <Image
                    alt=""
                    src="/src/images/arrow-icons/chv_left.svg"
                    width={26}
                    height={26}
                  />
                </div>
                <div className={style.txt_h}>{title}</div>
              </div>
            </div>
          )}
          <div className={style.modal_body}>{children}</div>
        </div>
      </div>
      <div className={style.light_box} onClick={onClickLightbox}></div>
    </>
  );
}

// 결과없음 메세지
export function EmptyMessage({ isAward, children }) {
  return (
    <div className={style.empty_message}>
      {isAward ? (
        <Image
          alt=""
          src="/src/images/@empty-message/empty-award.svg"
          width={156}
          height={140}
        />
      ) : (
        <Image
          alt=""
          src="/src/images/@empty-message/empty-board.svg"
          width={156}
          height={140}
        />
      )}

      <div className={style.txt_p}>{children}</div>
    </div>
  );
}

// 체크박스
export function CheckBox({ id, check, onClick }) {
  return (
    <div id={id} className={style.check_box} onClick={onClick}>
      {check ? (
        <Image
          alt=""
          src="/src/images/check-icons/check_box_on.svg"
          width={18}
          height={18}
        />
      ) : (
        <Image
          alt=""
          src="/src/images/check-icons/check_box_off.svg"
          width={18}
          height={18}
        />
      )}
    </div>
  );
}

// 커스텀 마진
export function Margin({ height }) {
  return <div style={{ marginBottom: `${height}px` }}></div>;
}

// 게시판 (컨테이너)
export const NoticeBoardContainer = ({ children }) => {
  return <div className={style.notice_board_container}>{children}</div>;
};

// 게시판 (아이템)
export const NoticeBoardItem = ({ title, date, href }) => {
  return (
    <div className={style.notice_board_item}>
      <div className={style.notice_date}>{date}</div>
      <Link href={href ? href : ""} target="_self">
        <div className={style.notice_title}>{title}</div>
      </Link>
    </div>
  );
};
