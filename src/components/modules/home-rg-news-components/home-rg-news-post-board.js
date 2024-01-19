"use client";

import stylesPc from "./home-rg-news-post-board.module.scss";
import {
  Dropdown,
  DropdownItem,
  Margin,
} from "@/components/common/common-components";
import Image from "next/image";
import { useEffect, useState } from "react";

const style = stylesPc;

export default function RgNewsPostBoard({ postData }) {
  const data = [...postData];

  const blurDataURL =
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";

  const [current, _current] = useState(0);

  const onClickLeft = () => {
    data.length - 1 == current ? _current(current) : _current(current + 1);
  };

  const onClickRight = () => {
    current == 0 ? _current(current) : _current(current - 1);
  };

  return (
    <div className={style.rg_news_post_board}>
      {/* 회차 선택 */}
      <div className={style.group_1}>
        <div className={style.btn_left} onClick={onClickLeft}>
          <Image
            alt=""
            src={"/src/images/arrow-icons/chv_left.svg"}
            width={24}
            height={24}
          />
        </div>
        <div className={style.col_center}>
          <Dropdown title={data[current].title}>
            {data.map((a, i) => {
              return (
                <DropdownItem
                  onClick={() => {
                    _current(i);
                  }}
                >
                  {a.title}
                </DropdownItem>
              );
            })}
          </Dropdown>
        </div>
        <div className={style.btn_right} onClick={onClickRight}>
          <Image
            alt=""
            src={"/src/images/arrow-icons/chv_right.svg"}
            width={24}
            height={24}
          />
        </div>
      </div>

      <Margin height={20} />
      {/* 내용 */}
      <div className={style.group_2}>
        <Image
          src={data[current].imgSrc}
          width={1000}
          height={800}
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}
