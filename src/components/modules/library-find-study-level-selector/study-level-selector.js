import { Dropdown, DropdownItem } from "@/components/common/common-components";
import style from "./study-level-selector.module.scss";
import { SetFilter } from "../library-set-fliter/set-fliter";

export function StudyLevelSelector({ prek, level, onClick }) {
  return (
    <div className={style.study_level_selector}>
      {prek && (
        <Dropdown title={`모든 단계`}>
          <DropdownItem>모든 단계</DropdownItem>
          <DropdownItem>1 알파벳 학습</DropdownItem>
          <DropdownItem>2 파닉스 학습</DropdownItem>
          <DropdownItem>3 단어 학습</DropdownItem>
          <DropdownItem>4 스토리 읽기</DropdownItem>
        </Dropdown>
      )}
      {level && (
        <div className={style.level_select_button} onClick={onClick}>
          {level}
          <span className={style.arrow_icon}></span>
        </div>
      )}
      <SetFilter />
    </div>
  );
}
