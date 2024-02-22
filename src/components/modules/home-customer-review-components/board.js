"use client";

import { Modal } from "@/components/common/common-components";
import stylesPc from "./board.module.scss";
import { useState } from "react";
import Link from "next/link";

const style = stylesPc;

export function Board({ children }) {
  return <div className={style.board}>{children}</div>;
}

export function BoardHeader({
  txt_th1,
  txt_th2,
  txt_th3,
  txt_th4,
  txt_contents,
}) {
  const [viewContents, _viewContents] = useState(false);

  return (
    <div className={style.board_header}>
      <div className={style.column}>{txt_th1}</div>
      <div className={style.column}>{txt_th2}</div>
      <div className={style.column}>{txt_th3}</div>
      <div className={style.column}>{txt_th4}</div>
    </div>
  );
}

export function BoardItem({ txt_td1, txt_td2, txt_td3, txt_td4, href }) {
  return (
    <>
      <div className={style.board_item}>
        <div className={style.column}>{txt_td1}</div>
        <div className={style.column}>
          <Link href={href ? href : ""}>{txt_td2}</Link>
        </div>
        <div className={style.column}>{txt_td3}</div>
        <div className={style.column}>{txt_td4}</div>
      </div>
    </>
  );
}
