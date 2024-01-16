import Link from "next/link";
import { Button, TextField } from "@/components/common/common-components";
import Image from "next/image";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Page() {
  return (
    <div className={style.personal_member}>
      <TextField id={"user-id"} hint={"아이디 (또는 e-mail)"} />
      <TextField id={"user-passowrd"} hint={"비밀번호"} password />
      <Button color={"red"} shadow>
        로그인
      </Button>
      <div className={style.row_box}>
        <Link href={"../forgot/forgot-id"}>아이디 찾기</Link>
        <Link href={"../forgot/forgot-password"}>비밀번호 찾기</Link>
      </div>
      <div className={style.comment}>
        ❗️ 학교나 학원에서 사용 안내를 받은 경우, 그룹 회원 탭에서 검색 후
        로그인 하세요.
      </div>
    </div>
  );
}
