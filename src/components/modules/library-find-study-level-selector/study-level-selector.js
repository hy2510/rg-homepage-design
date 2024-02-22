import { Dropdown, DropdownItem } from "@/components/common/common-components";
import stylesMobile from "./study-level-selector_m.module.scss";
import stylesPc from "./study-level-selector.module.scss";
import { SetFilter } from "../library-set-fliter/set-fliter";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export function StudyLevelSelector({
  prek,
  level,
  onClick,
  dodoabc,
  dodoabcGame,
  dodoabcSongnChant,
}) {
  return (
    <div className={style.study_level_selector}>
      {prek && (
        <Dropdown title={`모든 단계`}>
          <DropdownItem>모든 단계</DropdownItem>
          <DropdownItem>알파벳</DropdownItem>
          <DropdownItem>파닉스</DropdownItem>
          <DropdownItem>단어</DropdownItem>
          <DropdownItem>스토리</DropdownItem>
        </Dropdown>
      )}
      {dodoabc && (
        <Dropdown title={`모든 단계`}>
          <DropdownItem>모든 단계</DropdownItem>
          <DropdownItem>알파벳</DropdownItem>
          <DropdownItem>파닉스1</DropdownItem>
          <DropdownItem>파닉스2</DropdownItem>
          <DropdownItem>사이트워드1</DropdownItem>
          <DropdownItem>사이트워드2</DropdownItem>
        </Dropdown>
      )}
      {dodoabcGame && (
        <Dropdown title={`알파벳`}>
          <DropdownItem>알파벳</DropdownItem>
          <DropdownItem>파닉스</DropdownItem>
          <DropdownItem>사이트워드1</DropdownItem>
          <DropdownItem>사이트워드2</DropdownItem>
        </Dropdown>
      )}
      {dodoabcSongnChant && (
        <Dropdown title={`Nursery Rhyme`}>
          <DropdownItem>Nursery Rhyme</DropdownItem>
          <DropdownItem>Alphabet Chant</DropdownItem>
          <DropdownItem>Phonics Chant</DropdownItem>
        </Dropdown>
      )}
      {level && (
        <div className={style.level_select_button} onClick={onClick}>
          {level}
          <span className={style.arrow_icon}></span>
        </div>
      )}
      {!dodoabc && !dodoabcGame && !dodoabcSongnChant && <SetFilter />}
    </div>
  );
}
