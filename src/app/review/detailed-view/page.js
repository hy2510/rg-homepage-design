"use client";

import Image from "next/image";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import {
  Button,
  Dropdown,
  DropdownItem,
  Pagination,
  PaginationItem,
  PillItem,
  Pills,
} from "@/components/common/common-components";
import { ReportSearchBox } from "@/components/modules/review-detail-view-search-box/review-detail-view-search-box";
import {
  DetailedReportItem,
  DetailedReportsList,
  SpeakReportItem,
  SpeakReportsList,
  WritingReportItem,
  WritingReportsList,
} from "@/components/modules/review-detail-view-reports/review-detail-view-reports";
import { reports } from "../sample-data";
import { useState } from "react";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function Page() {
  const [reportType, _reportType] = useState("detail");
  const [dropdownTitle, _dropdownTitle] = useState("My Read");

  const DetailedReports = () => {
    return (
      <>
        <Pills>
          <PillItem active={true}>All 25권</PillItem>
          <PillItem active={false}>Passed 20권 (+120.22P)</PillItem>
          <PillItem active={false}>Failed 5권</PillItem>
        </Pills>
        <DetailedReportsList>
          {reports.map((a) => {
            return (
              <DetailedReportItem
                imgSrc={a.imgSrc}
                bookCode={a.bookCode}
                title={a.title}
                studyDate={a.studyDate}
                totalScore={a.totalScore}
                isPassed={a.isPassed}
                completedInfo={a.completedInfo}
                earnPoints={a.earnPoints}
              />
            );
          })}
        </DetailedReportsList>
        <Pagination>
          <PaginationItem active={true}>1</PaginationItem>
        </Pagination>
      </>
    );
  };

  const SpeakReports = () => {
    return (
      <>
        <Pills>
          <PillItem active={true}>All: 25권</PillItem>
          <PillItem active={false}>Passed: 20권 (+120.22P)</PillItem>
          <PillItem active={false}>Failed: 5권</PillItem>
        </Pills>
        <SpeakReportsList>
          {reports.map((a) => {
            return (
              <SpeakReportItem
                imgSrc={a.imgSrc}
                bookCode={a.bookCode}
                title={a.title}
                studyDate={a.studyDate}
                totalScore={a.totalScore}
                isPassed={a.isPassed}
                completedInfo={a.completedInfo}
                earnPoints={a.earnPoints}
              />
            );
          })}
        </SpeakReportsList>
        <Pagination>
          <PaginationItem active={true}>1</PaginationItem>
        </Pagination>
      </>
    );
  };

  const WritingReports = () => {
    return (
      <>
        <Pills>
          <PillItem active={true}>All: 25권</PillItem>
          <PillItem active={false}>Passed: 20권 (+120.22P)</PillItem>
          <PillItem active={false}>Failed: 5권</PillItem>
        </Pills>
        <WritingReportsList>
          {reports.map((a) => {
            return (
              <WritingReportItem
                imgSrc={a.imgSrc}
                bookCode={a.bookCode}
                title={a.title}
                studyDate={a.studyDate}
                totalScore={a.totalScore}
                isPassed={a.isPassed}
                completedInfo={a.completedInfo}
                earnPoints={a.earnPoints}
              />
            );
          })}
        </WritingReportsList>
        <Pagination>
          <PaginationItem active={true}>1</PaginationItem>
        </Pagination>
      </>
    );
  };

  return (
    <main className={style.detailed_view}>
      <ReportSearchBox />
      <Dropdown title={dropdownTitle}>
        <DropdownItem
          onClick={() => {
            _dropdownTitle("My Read");
            _reportType("detail");
          }}
        >
          My Read
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            _dropdownTitle("My Speak");
            _reportType("speak");
          }}
        >
          My Speak
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            _dropdownTitle("Writing Activity");
            _reportType("writing");
          }}
        >
          Writing Activity
        </DropdownItem>
      </Dropdown>
      {reportType == "detail" && <DetailedReports />}
      {reportType == "speak" && <SpeakReports />}
      {reportType == "writing" && <WritingReports />}
    </main>
  );
}
