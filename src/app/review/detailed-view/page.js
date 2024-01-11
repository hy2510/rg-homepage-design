import Image from "next/image";
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
} from "@/components/modules/review-detail-view-reports/review-detail-view-reports";
import { reports } from "../sample-data";

const style = stylesPc;

export default function Page() {
  return (
    <main className={style.detailed_view}>
      <ReportSearchBox />
      <Dropdown title={"My Read"}>
        <DropdownItem>My Read</DropdownItem>
        <DropdownItem>My Speak</DropdownItem>
        <DropdownItem>Writing Activity</DropdownItem>
      </Dropdown>
      <Pills>
        <PillItem active={true}>All: 25권</PillItem>
        <PillItem active={false}>Passed: 20권 (+120.22P)</PillItem>
        <PillItem active={false}>Failed: 5권</PillItem>
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
    </main>
  );
}
