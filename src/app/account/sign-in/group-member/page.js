"use client";

import Link from "next/link";
import { Button, TextField } from "@/components/common/common-components";
import Image from "next/image";
import stylesPc from "./page.module.scss";
import { useState } from "react";

const style = stylesPc;

// 샘플 데이터
const searchResultData = [
  { schoolName: "수내초등학교" },
  { schoolName: "수내중학교" },
  { schoolName: "수내고등학교" },
];
// const searchResultData = "";

export default function Page() {
  const [printSeachResult, _printSeachResult] = useState(false);

  // 검색 결과
  const SearchResult = ({ searchResultData }) => {
    const data = searchResultData;

    const SchoolCardItem = ({ schoolName }) => {
      return (
        <Link href={"../sign-in-group"}>
          <div className={style.school_card_item}>• {schoolName}</div>
        </Link>
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
}
