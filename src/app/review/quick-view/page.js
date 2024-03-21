"use client";

import Image from "next/image";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import {
  Dropdown,
  DropdownItem,
  Pagination,
  PaginationItem,
  PillItem,
  Pills,
} from "@/components/common/common-components";
import {
  QuickReportItem,
  QuickReportsList,
} from "@/components/modules/review-quick-view-reports/quick-view-reports";
import { reports } from "../sample-data";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  return (
    <main className={style.quick_view}>
      <Dropdown title={"최근 30일"}>
        <DropdownItem>최근 7일</DropdownItem>
        <DropdownItem>최근 30일</DropdownItem>
        <DropdownItem>최근 60일</DropdownItem>
        <DropdownItem>최근 90일</DropdownItem>
      </Dropdown>
      <Pills>
        <PillItem active={true}>All 25권</PillItem>
        <PillItem active={false}>Passed 20권</PillItem>
        <PillItem active={false}>Failed 5권</PillItem>
      </Pills>
      <QuickReportsList>
        <>
          {reports.map((a) => {
            return (
              <QuickReportItem
                title={a.title}
                bookCode={a.bookCode}
                isPassed={a.isPassed}
                imgSrc={a.imgSrc}
                studyDate={a.studyDate}
                totalScore={a.totalScore}
                completedInfo={a.completedInfo}
                earnPoints={a.earnPoints}
              />
            );
          })}
        </>
      </QuickReportsList>
      <Pagination>
        <PaginationItem active={true}>1</PaginationItem>
      </Pagination>
    </main>
  );
}
