"use client";

import stylesPc from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AlertBar,
  Dropdown,
  DropdownItem,
  Margin,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import todoData from "@/app/library/sample-data-todo.json";
import bookData from "@/app/library/sample-data-book.json";
import dodoabcData from "@/app/library/sample-data-dodoabc.json";
import prekData from "@/app/library/sample-data-prek.json";
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
import LevelSelector from "@/components/modules/library-explore-level-selector/level-selector";

const style = stylesPc;

export default function Page() {
  return (
    <main className={`${style.explore}`}>
      {/* <IntroChoodeLevel /> */}
      <PrekMode />
      {/* <BookReadingMode /> */}
      {/* <ChallengeMode /> */}
    </main>
  );
}

// 모듈: 북리딩 모드
const BookReadingMode = () => {
  const [viewLevelSelector, _viewLevelSelector] = useState(false);

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
      <LevelUpStatus
        studyLevel={"KA"}
        progress={"0%"}
        onClick={() => {
          _viewLevelSelector(true);
        }}
      />
      {viewLevelSelector && (
        <LevelSelector
          _viewLevelSelector={_viewLevelSelector}
          studyType={"eBook"}
        />
      )}
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
  const [studyTypeName, _studyTypeName] = useState("DODO ABC");
  const [studyTypeNum, _studyTypeNum] = useState(0);

  // 학습 유형 선택 (PreK 학습, 게임, 송앤챈트)
  const SelectStudyType = () => {
    return (
      <>
        <Dropdown
          title={<span style={{ fontSize: "1.2em" }}>{studyTypeName}</span>}
        >
          <DropdownItem
            onClick={() => {
              _studyTypeName("DODO ABC");
              _studyTypeNum(0);
            }}
          >
            DODO ABC
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              _studyTypeName("Game");
              _studyTypeNum(1);
            }}
          >
            Game
          </DropdownItem>
          <DropdownItem
            onClick={() => {
              _studyTypeName("Song & Chant");
              _studyTypeNum(2);
            }}
          >
            Song & Chant
          </DropdownItem>
        </Dropdown>
      </>
    );
  };

  // PreK 학습 리스트
  const PreKStudyList = () => {
    const stageTheme = [
      {
        stageName: "alphabet",
        introVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/alphabet_intro.mp4",
        outroVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/alphabet_ending.mp4",
        courseBgUrl:
          "https://www.readinggate.com/Content/DodoABC/Alphabet/img/page_bg.png",
      },
      {
        stageName: "phonics1",
        introVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/phonics1_intro.mp4",
        outroVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/phonics1_ending.mp4",
        courseBgUrl:
          "https://www.readinggate.com/Content/DodoABC/Phonics1/img/board_bg.png",
      },
      {
        stageName: "phonics2",
        introVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/phonics2_intro.mp4",
        outroVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/phonics2_ending.mp4",
        courseBgUrl:
          "https://www.readinggate.com/Content/DodoABC/Phonics2/img/board_bg.png",
      },
      {
        stageName: "sightWords1",
        introVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/sightwords_intro.mp4",
        outroVideoSrc:
          "https://wcfresource.a1edu.com/newsystem/moviebook/dodoabc/sightwords_ending.mp4",
        courseBgUrl:
          "https://www.readinggate.com/Content/DodoABC/SightWords1/img/board_bg.png",
      },
      {
        stageName: "sightWords2",
        introVideoSrc: "",
        outroVideoSrc: "",
        courseBgUrl:
          "https://www.readinggate.com/Content/DodoABC/SightWords2/img/board_bg.png",
      },
    ];
    const [stage, _stage] = useState("alphabet");
    const [stageNum, _stageNum] = useState(0);

    return (
      <>
        <Nav>
          <NavItem
            active={stage == "alphabet"}
            onClick={() => {
              _stage("alphabet");
              _stageNum(0);
            }}
          >
            알파벳
          </NavItem>
          <NavItem
            active={stage == "phonics1"}
            onClick={() => {
              _stage("phonics1");
              _stageNum(1);
            }}
          >
            파닉스1
          </NavItem>
          <NavItem
            active={stage == "phonics2"}
            onClick={() => {
              _stage("phonics2");
              _stageNum(2);
            }}
          >
            파닉스2
          </NavItem>
          <NavItem
            active={stage == "sightWords1"}
            onClick={() => {
              _stage("sightWords1");
              _stageNum(3);
            }}
          >
            사이트워드1
          </NavItem>
          <NavItem
            active={stage == "sightWords2"}
            onClick={() => {
              _stage("sightWords2");
              _stageNum(4);
            }}
          >
            사이트워드2
          </NavItem>
        </Nav>
        <AlertBar>
          강조되는 부분에서 시작 버튼을 눌러 학습을 시작하세요!
        </AlertBar>
        {/* 코스 아이템 */}
        <CourseList
          passedNum={4}
          totalNum={26}
          introVideoSrc={stageTheme[stageNum].introVideoSrc}
          outroVideoSrc={stageTheme[stageNum].outroVideoSrc}
          introBg={stageTheme[stageNum].stageName}
          outroBg={stageTheme[stageNum].stageName}
          outroBgUrl={stageTheme[stageNum].outroBgUrl}
          courseBgUrl={stageTheme[stageNum].courseBgUrl}
        >
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

  // 게임 리스트
  const GameList = () => {
    const [gameStage, _gameStage] = useState("alphabet");
    const [gameStageNum, _gameStageNum] = useState(0);
    const gameListData = [
      {
        num: 1,
        imgSrc: "eb-pk-601.jpg",
        completed: 1,
        score: 0,
      },
      {
        num: 2,
        imgSrc: "eb-pk-602.jpg",
        completed: 1,
        score: 0,
      },
      {
        num: 3,
        imgSrc: "eb-pk-603.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 4,
        imgSrc: "eb-pk-604.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 5,
        imgSrc: "eb-pk-605.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 6,
        imgSrc: "eb-pk-606.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 7,
        imgSrc: "eb-pk-607.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 8,
        imgSrc: "eb-pk-608.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 9,
        imgSrc: "eb-pk-609.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 10,
        imgSrc: "eb-pk-610.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 11,
        imgSrc: "eb-pk-611.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 12,
        imgSrc: "eb-pk-612.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 13,
        imgSrc: "eb-pk-613.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 14,
        imgSrc: "eb-pk-614.jpg",
        completed: 0,
        score: 0,
      },
      {
        num: 15,
        imgSrc: "eb-pk-615.jpg",
        completed: 0,
        score: 0,
      },
    ];

    const GameHeader = ({ gameStageNum }) => {
      return (
        <div
          className={`${style.game_header} 
          ${gameStageNum == 0 && style.alphabet}
          ${gameStageNum == 1 && style.phonics}
          ${gameStageNum == 2 && style.sight_word_1}
          ${gameStageNum == 3 && style.sight_word_2}
          `}
        >
          <div
            className={`${style.symbol_image} 
          ${gameStageNum == 0 && style.alphabet}
          ${gameStageNum == 1 && style.phonics}
          ${gameStageNum == 2 && style.sight_word_1}
          ${gameStageNum == 3 && style.sight_word_2}
          `}
          ></div>
        </div>
      );
    };

    const GameListItem = ({ imgSrc, completed }) => {
      return (
        <div
          className={`${style.game_list_item} ${
            completed == 0 ? style.incompleted : ""
          }`}
        >
          <Image
            alt=""
            src={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${imgSrc}`}
            width={100}
            height={150}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      );
    };

    return (
      <>
        <Nav>
          <NavItem
            active={gameStage == "alphabet"}
            onClick={() => {
              _gameStage("alphabet");
              _gameStageNum(0);
            }}
          >
            알파벳
          </NavItem>
          <NavItem
            active={gameStage == "phonics"}
            onClick={() => {
              _gameStage("phonics");
              _gameStageNum(1);
            }}
          >
            파닉스
          </NavItem>
          <NavItem
            active={gameStage == "sightWords1"}
            onClick={() => {
              _gameStage("sightWords1");
              _gameStageNum(2);
            }}
          >
            사이트워드1
          </NavItem>
          <NavItem
            active={gameStage == "sightWords2"}
            onClick={() => {
              _gameStage("sightWords2");
              _gameStageNum(3);
            }}
          >
            사이트워드2
          </NavItem>
        </Nav>
        <GameHeader gameStageNum={gameStageNum} />
        <div className={style.game_list}>
          {gameListData.map((a) => {
            return <GameListItem imgSrc={a.imgSrc} completed={a.completed} />;
          })}
        </div>
      </>
    );
  };

  // 송앤챈트 리스트
  const SongnChantList = () => {
    const [songnChantStage, _songnChantStage] = useState("nurseryRhyme");
    const [songnChantNum, _songnChantNum] = useState(0);

    const songnChantListData = [
      {
        num: 1,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market, To Market, to Market",
      },
      {
        num: 2,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 3,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 4,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 5,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
      {
        num: 6,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market",
      },
      {
        num: 7,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 8,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 9,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 10,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
      {
        num: 11,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market",
      },
      {
        num: 12,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 13,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 14,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 15,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
      {
        num: 16,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market",
      },
      {
        num: 17,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 18,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 19,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 20,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
      {
        num: 21,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market",
      },
      {
        num: 22,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 23,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 24,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 25,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
      {
        num: 26,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-725.jpg",
        title: "To Market, to Market",
      },
      {
        num: 27,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-726.jpg",
        title: "To Market, to Market",
      },
      {
        num: 28,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-727.jpg",
        title: "To Market, to Market",
      },
      {
        num: 29,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-728.jpg",
        title: "To Market, to Market",
      },
      {
        num: 30,
        imgSrc:
          "https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-729.jpg",
        title: "To Market, to Market",
      },
    ];

    const SongnChantListItem = ({ imgSrc, title }) => {
      return (
        <div className={style.songn_chant_list_item}>
          <div className={style.cover}>
            <Image
              alt=""
              src={imgSrc}
              width={150}
              height={100}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
          <div className={style.title}>{title}</div>
        </div>
      );
    };

    const SongnChantHeader = ({ songnChantNum }) => {
      return (
        <div
          className={`${style.songn_chant_header} 
          ${songnChantNum == 0 && style.nursery_rhyme}
          ${songnChantNum == 1 && style.alpabet_chant}
          ${songnChantNum == 2 && style.phonics_chant}
          `}
        >
          <div
            className={`${style.symbol_image} 
            ${songnChantNum == 0 && style.nursery_rhyme}
            ${songnChantNum == 1 && style.alpabet_chant}
            ${songnChantNum == 2 && style.phonics_chant}
          `}
          ></div>
        </div>
      );
    };

    return (
      <>
        <Nav>
          <NavItem
            active={songnChantNum == 0}
            onClick={() => {
              _songnChantStage("nurseryRhyme");
              _songnChantNum(0);
            }}
          >
            Nursery Rhyme
          </NavItem>
          <NavItem
            active={songnChantNum == 1}
            onClick={() => {
              _songnChantStage("alphabetChant");
              _songnChantNum(1);
            }}
          >
            Alphabet Chant
          </NavItem>
          <NavItem
            active={songnChantNum == 2}
            onClick={() => {
              _songnChantStage("phonicsChant");
              _songnChantNum(2);
            }}
          >
            Phonics Chant
          </NavItem>
        </Nav>
        <SongnChantHeader songnChantNum={songnChantNum} />
        <div className={style.songn_chant_list}>
          {songnChantListData.map((a) => {
            return <SongnChantListItem imgSrc={a.imgSrc} title={a.title} />;
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <LevelUpStatus
        isLevelPk={<SelectStudyType />}
        studyLevel={"PK"}
        progress={"0%"}
      />
      {studyTypeNum == 0 && <PreKStudyList />}
      {studyTypeNum == 1 && <GameList />}
      {studyTypeNum == 2 && <SongnChantList />}
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
