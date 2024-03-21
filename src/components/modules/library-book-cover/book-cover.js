"use client";

import { AlertBox, Button, Modal } from "@/components/common/common-components";
import stylesMobile from "./book-cover_m.module.scss";
import stylesPc from "./book-cover.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMobileDetect } from "@/components/util";

const isMobile = useMobileDetect();
const style = isMobile ? stylesMobile : stylesPc;

// 도서 아이템
export function BookCover({
  bookImgSrc,
  bookCode,
  title,
  author,
  summary,
  assignDate,
  earnPoint,
  isToDoOn,
  isFavoriteOn,
  isAssignedTodo,
  isPassed1,
  isPassedAll,
  hasMovieSrc,
  id,
  onClickCheck,
  isExportMode,
  isDeleteMode,
}) {
  const [isBookInfoActive, _isBookInfoActive] = useState(false);
  const [isCheckActive, _isCheckActive] = useState(false);

  useEffect(() => {
    if (isBookInfoActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <div className={style.book_cover} key={id}>
        <div className={style.container}>
          <div className={style.study_status}>
            {isAssignedTodo && (
              <div className={style.assigned_todo}>
                <Image
                  alt=""
                  src="/src/images/@book-cover/assigned_todo.svg"
                  width={34}
                  height={34}
                />
              </div>
            )}
            {isPassed1 && isPassedAll ? (
              <div className={style.passed_all}>
                <Image
                  alt=""
                  src="/src/images/@book-cover/passed_all.svg"
                  width={34}
                  height={34}
                />
              </div>
            ) : (
              isPassed1 && (
                <div className={style.passed_1}>
                  <Image
                    alt=""
                    src="/src/images/@book-cover/passed_1.svg"
                    width={34}
                    height={34}
                  />
                </div>
              )
            )}
          </div>
          <div className={style.book_image}>
            {isExportMode || isDeleteMode ? (
              <div
                className={`${style.check_box} ${style.swirl_in_bck}`}
                id={id}
                onClick={() => {
                  onClickCheck
                    ? isCheckActive
                      ? _isCheckActive(false) // 체크박스 체크시 일괄 작업 실행 명령어가 들어갈 자리
                      : _isCheckActive(true)
                    : undefined;
                }}
              >
                {isCheckActive ? (
                  <Image
                    alt=""
                    src="/src/images/check-icons/check_box_on.svg"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    alt=""
                    src="/src/images/check-icons/check_box_off.svg"
                    width={24}
                    height={24}
                  />
                )}
              </div>
            ) : undefined}
            {hasMovieSrc && (
              <div className={style.movie_icon}>
                <Image
                  alt=""
                  src="/src/images/@book-cover/movie_src.svg"
                  width={34}
                  height={34}
                />
              </div>
            )}
            <Image
              alt=""
              src={bookImgSrc}
              layout="intrinsic"
              width={200}
              height={200}
              className={style.book_image_src}
              onClick={() => {
                _isBookInfoActive(true);
              }}
              art=""
            />
          </div>
          {bookCode && (
            <div className={style.tag}>
              <span>{bookCode}</span>
            </div>
          )}
          {assignDate && (
            <div className={style.tag}>
              <span>+{assignDate}</span>
            </div>
          )}
          {earnPoint && (
            <div className={`${style.tag} ${style.point}`}>
              <span>{earnPoint}P</span>
            </div>
          )}
        </div>
      </div>
      {isBookInfoActive && (
        <BookInfoModal
          _isBookInfoActive={_isBookInfoActive}
          bookImgSrc={bookImgSrc}
          isToDoOn={isToDoOn}
          isFavoriteOn={isFavoriteOn}
          title={title}
          author={author}
          summary={summary}
          bookCode={bookCode}
          onClickDelete={() => {
            _isBookInfoActive(false);
          }}
        />
      )}
    </>
  );
}

// 도서 정보 모달
export function BookInfoModal({
  bookImgSrc,
  title,
  _isBookInfoActive,
  author,
  summary,
  addedToDo,
  addedFavorite,
  onClickDelete,
  bookCode,
}) {
  const [isFavoriteOn, _isFavoriteOn] = useState(addedFavorite);
  const [isFavoriteCheck, _isFavoriteCheck] = useState(false);
  const [isToDoOn, _isToDoOn] = useState(addedToDo);
  const [isToDoCheck, _isToDoCheck] = useState(false);

  const [isMoviePlayOn, _isMoviePlayOn] = useState(false);
  const videoRef = useRef(null);
  const videoStop = () => {
    videoRef.current.pause();
  };

  return (
    <Modal
      onClickDelete={() => {
        _isBookInfoActive(false);
      }}
      onClickLightbox={() => {
        _isBookInfoActive(false);
      }}
    >
      <div className={style.book_info_modal}>
        <div
          className={style.col_a}
          style={{ backgroundImage: `url(${bookImgSrc})` }}
        >
          <div className={style.col_a_container}>
            <div className={style.add_assignment}>
              <div className={style.add_assignment_container}>
                <div className={style.add_favorite}>
                  <div
                    className={style.add_favorite_icon}
                    onClick={() => {
                      _isFavoriteCheck(true);
                      _isToDoCheck(false);
                    }}
                  >
                    {isFavoriteOn ? (
                      <Image
                        alt=""
                        src="/src/images/@book-info/add_favorite_on.svg"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        alt=""
                        src="/src/images/@book-info/add_favorite_off.svg"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  {isFavoriteOn ? (
                    isFavoriteCheck ? (
                      <div className={style.alert}>
                        <AlertBox
                          toolTipRight={!isMobile}
                          toolTipLeft={isMobile}
                          text="Favorite에서 학습을 삭제할까요?"
                          onClickY={() => {
                            _isFavoriteOn(false);
                            _isFavoriteCheck(false);
                          }}
                          onClickN={() => {
                            _isFavoriteCheck(false);
                          }}
                        />
                      </div>
                    ) : (
                      <></>
                    )
                  ) : isFavoriteCheck ? (
                    <div className={style.alert}>
                      <AlertBox
                        toolTipRight={!isMobile}
                        toolTipLeft={isMobile}
                        text="Favorite에 학습을 추가할까요?"
                        onClickY={() => {
                          _isFavoriteOn(true);
                          _isFavoriteCheck(false);
                        }}
                        onClickN={() => {
                          _isFavoriteCheck(false);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={style.add_todo}>
                  <div
                    className={style.add_todo_icon}
                    onClick={() => {
                      _isFavoriteCheck(false);
                      _isToDoCheck(true);
                    }}
                  >
                    {isToDoOn ? (
                      <Image
                        alt=""
                        src="/src/images/@book-info/add_to_do_on.svg"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        alt=""
                        src="/src/images/@book-info/add_to_do_off.svg"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  {isToDoOn ? (
                    isToDoCheck ? (
                      <div className={style.alert}>
                        <AlertBox
                          toolTipRight={!isMobile}
                          toolTipLeft={isMobile}
                          text="To-Do에서 학습을 삭제할까요?"
                          onClickY={() => {
                            _isToDoOn(false);
                            _isToDoCheck(false);
                          }}
                          onClickN={() => {
                            _isToDoCheck(false);
                          }}
                        />
                      </div>
                    ) : (
                      <></>
                    )
                  ) : isToDoCheck ? (
                    <div className={style.alert}>
                      <AlertBox
                        toolTipRight={!isMobile}
                        toolTipLeft={isMobile}
                        text="To-Do에 학습을 추가할까요?"
                        onClickY={() => {
                          _isToDoOn(true);
                          _isToDoCheck(false);
                        }}
                        onClickN={() => {
                          _isToDoCheck(false);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className={style.book}>
              <div className={style.book_container}>
                {/* 무비가 없는 경우 도서 표지 표시 */}
                {/* <div className={style.book_image}>
                  <Image
                    alt=""
                    src={bookImgSrc}
                    layout="intrinsic"
                    width={200}
                    height={200}
                  />
                </div> */}
                {/* 무비가 있는 경우 도서 표지 대신 무비 표시 */}
                <div className={style.movie_player}>
                  <video
                    ref={videoRef}
                    poster={bookImgSrc}
                    disablepictureinpicture={"true"}
                    autoPlay={false}
                    controls
                    controlslist={"nodownload"}
                    playsinline
                    style={{
                      width: "100%",
                      display: "block",
                      maxHeight: isMobile ? "280px" : "300px",
                    }}
                    src={`https://moviebook.a1edu.com/newsystem/moviebook/${bookCode}.mp4`}
                  />
                </div>
                <div className={style.txt_h}>{title}</div>
                <div className={style.txt_l}>{author}</div>
              </div>
              <div className={style.download}>
                <div className={style.download_voca}>
                  <span>단어장</span>
                  <Image
                    alt=""
                    src="/src/images/@book-info/download.svg"
                    width={14}
                    height={14}
                  />
                </div>
                <div className={style.download_worksheet}>
                  <span>워크시트</span>
                  <Image
                    alt=""
                    src="/src/images/@book-info/download.svg"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </div>
            <Button shadow width="100%" color={"red"}>
              학습하기
            </Button>
          </div>
          <div className={style.light_box}></div>
        </div>
        <div className={style.col_b}>
          <div className={style.col_b_header}>
            <div className={style.txt_h}>학습 정보</div>
            <div className={style.delete_button} onClick={onClickDelete}>
              {/* <Image
                alt=""
                src="/src/images/delete-icons/x_black.svg"
                width={28}
                height={28}
              /> */}
            </div>
          </div>
          <div className={style.col_b_body}>
            <div className={style.book_info}>
              <div className={style.txt_p}>{summary}</div>
              <div className={style.detaild}>
                <div className={style.detaild_row_a}>
                  <div className={style.detaild_item}>학습 레벨</div>
                  <div className={style.detaild_item}>1B</div>
                  <div className={style.detaild_item}>북코드</div>
                  <div className={style.detaild_item}>EB-1B-003</div>
                  <div className={style.detaild_item}>페이지수</div>
                  <div className={style.detaild_item}>22</div>
                  <div className={style.detaild_item}>단어수</div>
                  <div className={style.detaild_item}>99000</div>
                  <div className={style.detaild_item}>등급</div>
                  <div className={style.detaild_item}>All</div>
                  <div className={style.detaild_item}>장르</div>
                  <div className={style.detaild_item}>Fiction</div>
                </div>
                <div className={style.detaild_row_b}>
                  <div className={style.detaild_item}>학습횟수</div>
                  <div className={style.detaild_item}>1/2</div>
                  <div className={style.detaild_item}>포인트</div>
                  <div className={`${style.detaild_item} ${style.passed}`}>
                    학습횟수 1회 완료 (+1P)
                  </div>
                  <div className={style.detaild_item}></div>
                  <div className={style.detaild_item}>
                    학습횟수 2회 완료시: 0.5P 획득
                  </div>
                </div>
              </div>
            </div>
            <div className={style.book_resource}>
              <div className={style.book_resource_container}>
                <div className={style.txt_h}>추가 학습</div>
                <div className={style.buttons}>
                  <div className={style.speak_button}>Speak</div>
                  {/* <div
                    className={style.movie_button}
                    onClick={() => {
                      _isMoviePlayOn(true);
                    }}
                  >
                    영상시청
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMoviePlayOn && (
        <div className={style.movie_player}>
          <div className={style.container_video}>
            <video
              ref={videoRef}
              controlslist="nodownload"
              disablepictureinpicture="true"
              controls
              autoPlay
              playsinline
              poster=""
              style={{ width: "100%" }}
              src={`https://moviebook.a1edu.com/newsystem/moviebook/${bookCode}.mp4`}
            />
          </div>
          <Button
            color={"red"}
            shadow
            width={"200px"}
            onClick={() => {
              videoStop();
              _isMoviePlayOn(false);
            }}
          >
            close
          </Button>
        </div>
      )}
    </Modal>
  );
}
