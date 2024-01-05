"use client";

import { Modal } from "@/components/common/common-components";
import style from "./set-filter.module.scss";
import Image from "next/image";
import { useState } from "react";

// 필터 콘테이너
export function SetFilter({ children }) {
  const [isActiveSetFilter, _isActiveSetFilter] = useState(false);

  return (
    <>
      <div className={style.set_filter}>
        <div className={style.filter_items}>
          <FilterItem>미완료 학습</FilterItem>
          <FilterItem>기본 정렬</FilterItem>
          <FilterItem>Fiction</FilterItem>
        </div>
        <div
          className={style.filter_button}
          onClick={() => {
            _isActiveSetFilter(true);
          }}
        >
          <Image
            alt=""
            src="/src/images/filter-icons/filter_blue.svg"
            width={20}
            height={20}
          />
          <div className={style.txt_l}>필터</div>
        </div>
      </div>
      {isActiveSetFilter && (
        <SetFilterModal _isActiveSetFilter={_isActiveSetFilter} />
      )}
    </>
  );
}

// 필터 아이템
export function FilterItem({ children }) {
  return <div className={style.filter_item}>{children}</div>;
}

// 필터 설정 팝업
export function SetFilterModal({ _isActiveSetFilter }) {
  return (
    <Modal
      compact
      header
      title="필터 설정"
      onClickDelete={() => {
        _isActiveSetFilter(false);
      }}
      onClickLightbox={() => {
        _isActiveSetFilter(false);
      }}
    >
      <div className={style.set_filter_modal}>
        <div className={style.row_a}>
          <div className={style.txt_h}>학습 상태</div>
          <div className={style.items}>
            <SetFilterItem>모든 학습</SetFilterItem>
            <SetFilterItem active>미완료 학습</SetFilterItem>
            <SetFilterItem>완료한 학습</SetFilterItem>
          </div>
        </div>
        <div className={style.row_b}>
          <div className={style.txt_h}>부가 설정</div>
          <div className={style.items}>
            <SetFilterItem active>설정 안함</SetFilterItem>
            <SetFilterItem>학습 1회차를 Full모드로 완료함</SetFilterItem>
            <SetFilterItem>학습 1회차를 Easy모드로 완료함</SetFilterItem>
          </div>
        </div>
        <div className={style.row_c}>
          <div className={style.txt_h}>정렬 방법</div>
          <div className={style.items}>
            <SetFilterItem active>기본 정렬</SetFilterItem>
            <SetFilterItem>선호도순</SetFilterItem>
            <SetFilterItem>인기순</SetFilterItem>
            <SetFilterItem>업데이트순</SetFilterItem>
            <SetFilterItem>포인트순</SetFilterItem>
          </div>
        </div>
        <div className={style.row_d}>
          <div className={style.txt_h}>장르별</div>
          <div className={style.items}>
            <SetFilterItem>모든 장르</SetFilterItem>
            <SetFilterItem active>Fiction</SetFilterItem>
            <SetFilterItem>Non-Fiction</SetFilterItem>
          </div>
        </div>
      </div>
    </Modal>
  );
}

// 필터 설정 아이템
export function SetFilterItem({ active, children, onClick }) {
  return (
    <div
      className={`${style.set_filter_item} ${active && style.active}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
