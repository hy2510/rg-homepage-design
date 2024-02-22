"use client";

import { Button } from "@/components/common/common-components";
import stylesMobile from "./export-mode-panel_m.module.scss";
import stylesPc from "./export-mode-panel.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 내보내기(일괄작업) 콘테이너
export const ExportModePanel = ({ children, buttonName }) => {
  return (
    <div className={`${style.export_mode_panel} ${style.bounce_top}`}>
      <div className={style.export_mode_panel_container}>
        {/* <div>이호열반</div> */}
        <div className={style.selected_books}>선택한 도서 0</div>
        <div className={style.export_items}>
          {children ? (
            <div className={style.export_items_container}>{children}</div>
          ) : (
            <></>
          )}
          <Button shadow roundFull color={"red"}>
            {buttonName ? buttonName : "내보내기"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// 내보내기(일괄작업) 아이템
export const ExportItem = ({
  active,
  children,
  onClick,
  isVocaSelected,
  isListSelected,
  isTodoSelected,
  isFavSelected,
}) => {
  return (
    <div
      className={`${style.export_item} ${isVocaSelected && style.active} ${
        isListSelected && style.active
      } ${isTodoSelected && style.active} ${isFavSelected && style.active}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
