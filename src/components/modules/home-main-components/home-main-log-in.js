"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common/common-components";
import stylesMobile from "./home-main-log-in_m.module.scss";
import stylesPc from "./home-main-log-in.module.scss";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

export default function LogIn() {
  return (
    <div className={style.log_in}>
      <div className={style.row_1}>
        <div className={style.group_1}>
          <div className={style.txt_1}>읽는 즐거움</div>
          <div className={style.txt_1}>커가는 영어실력</div>
        </div>
        <div className={style.txt_2}>리딩게이트</div>
      </div>
      <div className={style.row_2}>
        <div className={style.group_1}>
          <Link href={"/account/account-list"}>
            <Button color={"red"} shadow>
              로그인
            </Button>
          </Link>
        </div>

        <div className={style.position_img_1}>
          <Image
            alt=""
            src="/src/images/@home/img_edmond.svg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
