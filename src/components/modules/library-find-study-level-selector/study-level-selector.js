import { Dropdown, DropdownItem } from "@/components/common/common-components";
import style from "./study-level-selector.module.scss";
import { SetFilter } from "../library-set-fliter/set-fliter";

export function StudyLevelSelector({ prek, eb, pk }) {
  return (
    <div className={style.study_level_selector}>
      {prek && (
        <Dropdown title={`모든 단계`}>
          <DropdownItem>모든 단계</DropdownItem>
          <DropdownItem>단계 1. 알파벳 학습</DropdownItem>
          <DropdownItem>단계 2. 파닉스 학습</DropdownItem>
          <DropdownItem>단계 3. 단어 학습</DropdownItem>
          <DropdownItem>단계 4. 스토리 읽기</DropdownItem>
        </Dropdown>
      )}
      {eb && (
        <Dropdown title={`레벨 KA`}>
          <DropdownItem>KA</DropdownItem>
          <DropdownItem>KB</DropdownItem>
          <DropdownItem>KC</DropdownItem>
          <DropdownItem>1A</DropdownItem>
          <DropdownItem>1B</DropdownItem>
          <DropdownItem>1C</DropdownItem>
          <DropdownItem>2A</DropdownItem>
          <DropdownItem>2B</DropdownItem>
          <DropdownItem>2C</DropdownItem>
          <DropdownItem>3A</DropdownItem>
          <DropdownItem>3B</DropdownItem>
          <DropdownItem>3C</DropdownItem>
          <DropdownItem>4A</DropdownItem>
          <DropdownItem>4B</DropdownItem>
          <DropdownItem>4C</DropdownItem>
          <DropdownItem>5A</DropdownItem>
          <DropdownItem>5B</DropdownItem>
          <DropdownItem>5C</DropdownItem>
          <DropdownItem>6A</DropdownItem>
          <DropdownItem>6B</DropdownItem>
          <DropdownItem>6C</DropdownItem>
        </Dropdown>
      )}
      <SetFilter />
    </div>
  );
}
