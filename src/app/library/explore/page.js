"use client";

import style from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlertBar,
  Margin,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import todoData from "@/app/library/sample-data-todo.json";
import bookData from "@/app/library/sample-data-book.json";
import dodoabcData from "@/app/library/sample-data-dodoabc.json";
import { BookSearchBar } from "@/components/modules/library-book-search-bar/book-search-bar";
import { ExpTodoList } from "@/components/modules/library-explore-todo-list/todo-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import { BookList } from "@/components/modules/library-explore-book-list/book-list";
import {
  SeriesItem,
  SeriesList,
} from "@/components/modules/library-explore-series-list/series-list";
import {
  ThemeList,
  ThemeListItem,
} from "@/components/modules/library-explore-theme-list/theme-list";
import { LevelUpStatus } from "@/components/modules/library-explore-level-up-status/level-up-status";
import {
  ChallengeBoard,
  MyGoal,
  MyProgress,
} from "@/components/modules/library-explore-challenge-board/challenge-board";
import {
  CourseItem,
  CourseList,
} from "@/components/modules/library-explore-course-list/course-list";
import { IntroChoodeLevel } from "@/components/modules/library-intro-choose-level/intro-choose-level";

export default function Page() {
  return (
    <main className={`${style.explore} ${style.pc}`}>
      {/* <IntroChoodeLevel /> */}
      {/* <PrekMode /> */}
      <BookReadingMode />
      {/* <ChallengeMode /> */}
    </main>
  );
}

// 모듈: 북리딩 모드
const BookReadingMode = () => {
  return (
    <>
      <ExpTodoList>
        {todoData.map((a, i) => {
          return (
            <BookCover
              key={`to-do-book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
            />
          );
        })}
      </ExpTodoList>
      <LevelUpStatus studyLevel={"KA"} progress={"0%"} />
      <Nav>
        <NavItem active={true}>eBook</NavItem>
        <NavItem active={false}>pBookQuiz</NavItem>
      </Nav>
      <BookList>
        {bookData.map((a, i) => {
          return (
            <BookCover
              key={`book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
            />
          );
        })}
      </BookList>
      <Pagination>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
        <PaginationItem active={true}>1</PaginationItem>
        <PaginationItem active={false}>2</PaginationItem>
        <PaginationItem active={false}>3</PaginationItem>
        <PaginationItem active={false}>4</PaginationItem>
        <PaginationItem active={false}>5</PaginationItem>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
      </Pagination>
      <SeriesList>
        <SeriesItem
          seriesName="Sample Series"
          seriesImgSrc="/src/sample-images/series-sample/10_minute_classics.png"
          theme="gray"
        />
        <SeriesItem
          seriesName="Sample Series"
          seriesImgSrc="/src/sample-images/series-sample/20_shakespeare_Children_s_stories.png"
          theme="dark_green"
        />
        <SeriesItem
          seriesName="Sample Series"
          seriesImgSrc="/src/sample-images/series-sample/animal_tales.png"
          theme="purple"
        />
        <SeriesItem
          seriesName="Sample Series"
          seriesImgSrc="/src/sample-images/series-sample/bible_stories.png"
          theme="blue"
        />
      </SeriesList>
      <ThemeList>
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
      </ThemeList>
    </>
  );
};

// 모듈: PreK 모드
const PrekMode = () => {
  return (
    <>
      <LevelUpStatus isLevelPk studyLevel={"PK"} progress={"0%"} />
      <Nav>
        <NavItem active={true}>알파벳</NavItem>
        <NavItem active={false}>파닉스</NavItem>
        <NavItem active={false}>사이트워드</NavItem>
      </Nav>
      <AlertBar>강조되는 부분에서 시작 버튼을 눌러 학습을 시작하세요!</AlertBar>
      {/* 코스 아이템 */}
      <CourseList passedNum={4} totalNum={26}>
        {dodoabcData.map((a, i) => {
          return (
            <CourseItem
              imgSrc={a.imgSrc}
              prevNum={i - 1}
              currentNum={i}
              studyData={dodoabcData}
              passed={a.passed}
              title={a.title}
            />
          );
        })}
      </CourseList>
    </>
  );
};

// 모듈: 영어독서왕 모드
const ChallengeMode = () => {
  return (
    <>
      <AlertBar>
        영어 독서왕에 도전해 보세요! 나의 목표를 설정하고 매일 적정량의 학습을
        완료하세요! (하루 최대 얻을 수 있는 포인트는 150P 입니다)
      </AlertBar>
      <ChallengeBoard
        challengeTitle="제 300회 영어 독서왕 선발 대회"
        symbolImgSrc="/src/images/@challenge-board/challenge_symbol.png"
        challengePeriod="2023.09.01 ~ 2023.12.07"
      />
      <ExpTodoList>
        {todoData.map((a, i) => {
          return (
            <BookCover
              key={`to-do-book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              earnPoint={a.earnPoint}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
            />
          );
        })}
      </ExpTodoList>
      <LevelUpStatus studyLevel={"KA"} progress={"0%"} />
      <Nav>
        <NavItem active={true}>eBook</NavItem>
        <NavItem active={false}>pBookQuiz</NavItem>
      </Nav>
      <BookList>
        {bookData.map((a, i) => {
          return (
            <BookCover
              key={`book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              earnPoint={a.earnPoint}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
              isAssignedTodo={a.isAssignedTodo}
              isPassed1={a.isPassed1}
              isPassedAll={a.isPassedAll}
              hasMovieSrc={a.hasMovieSrc}
            />
          );
        })}
      </BookList>
      <Pagination>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
        <PaginationItem active={true}>1</PaginationItem>
        <PaginationItem active={false}>2</PaginationItem>
        <PaginationItem active={false}>3</PaginationItem>
        <PaginationItem active={false}>4</PaginationItem>
        <PaginationItem active={false}>5</PaginationItem>
        <PaginationItem>
          <Image
            alt=""
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
      </Pagination>
    </>
  );
};

// 모듈: 코스 모드
