"use client";

import { ReviewContents } from "@/components/modules/home-customer-review-components/review-contents";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Page() {
  return (
    <div className={style.content}>
      <ReviewContents
        number={10}
        title={"설레는 순간을 만들어 준 리딩게이트"}
        name={"손흥민"}
        date={"2024-02-01"}
        onClickBackToList={() => {
          window.history.back();
        }}
        onClickGoToList={() => {
          window.location.href = "/home/customer-review/student";
        }}
      >
        12지 동물들이 어떻게 달리기해서 순서가 정해졌는지 아시나요? Zodiac
        Race를 읽으면 용이 가뭄이 든 나라에 비를 내려주고 오느라 늦은 이야기며,
        동물마다 사연이 있는데요. 외할머니께서 12지신 순서를 제대로 알지
        못했었는데 이야기 덕분에 순서를 정확하게 알게 되었다고 고맙다고
        하셨답니다. 온 가족과 재미있게 이야기를 읽으며 점수까지 얻을 수 있어
        일석이조였어요! 가족들과 장거리 여행을 다녀오며 차 안에서 1시간이 넘도록
        Milly와 Molly의 이야기 덕분에 가족들과 깔깔거리며 이야기를 나누면서
        지루할 틈도 없이 집에 도착할 수 있었답니다. 리딩 게이트 속 숨은 묘미는
        영어 만화책인데요. 읽다 보면 재미있어서 다음! 다음! 을 외치며 다음 편을
        읽어 내려가기 때문에 많은 재미와 힘을 주었어요. “올해는 리딩게이트
        덕분에 제가 빛났습니다.” 목표까지 달려오면서 포기하고 싶은 순간도
        있었어요. 그때 나에게 “리딩게이트 에이스!”라고 칭찬해 준 친구들에게 정말
        고마워요. 우리 반은 모두 리딩게이트를 하면 스탬프를 받는데요. 연속 성공
        시 담임선생님께서 숙제 1회 면제, 자율 체육 등 우리를 위해 선물을 준비해
        주셨어요. 덕분에 친구들이 서로를 챙겨주었어요. 우리 손명지 선생님
        감사해요! 그리고 칭찬을 아끼지 않으셨던 외할머니, 마지막까지 성공 꿀팁을
        주셨던 우리 아빠에게도 감사합니다. 전교생이 마음껏 영어의 바다에 빠져볼
        수 있도록 기회를 주신 우리 성남초등학교에 감사 인사드립니다. 앞으로도
        열심히 할게요! 리딩 게이트 덕분에 단어도 많이 알고 영어를 즐겁게 공부할
        수 있었어요. 이렇게 멋진 프로그램을 만들어주신 리딩게이트 최고에요!
      </ReviewContents>
    </div>
  );
}
