"use client";

import Link from "next/link";
import { Button, TextField } from "@/components/common/common-components";
import stylesMobile from "./page_m.module.scss";
import stylesPc from "./page.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 임시
const schoolName = "수내초등학교";

export default function Page() {
  return (
    <main className={style.sign_in_group}>
      <div className={style.catchphrase}>
        <div className={style.brand_name}>리딩게이트</div>
        <div className={style.sentence}>읽는 즐거움, 커가는 영어실력</div>
      </div>
      <div className={style.group_log_in_box}>
        <div className={style.txt_school_name}>{schoolName}</div>
        <TextField id={"user-id"} hint={"아이디"} />
        <TextField id={"user-passowrd"} hint={"비밀번호"} password />
        <Button shadow>로그인</Button>
        <div className={style.row_box}>
          <Link href={"/"}>아이디 찾기</Link>
          <Link href={"/"}>비밀번호 찾기</Link>
        </div>
        <div className={style.comment}>
          ❗️ '{schoolName}'에서 재학중인 학생만 이용할 수 있어요. <br />
          ❗️ 아이디와 비밀번호는 '{schoolName}'에서 발급해 드려요.
        </div>
      </div>
    </main>
  );
}
