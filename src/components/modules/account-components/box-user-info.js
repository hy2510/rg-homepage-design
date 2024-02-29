import stylesPc from "./box-user-info.module.scss";

const style = stylesPc;

export default function BoxUserInfo({
  name,
  signInID,
  joinDate,
  endDate,
  groupClass,
}) {
  return (
    <div className={style.box_user_info}>
      {name && (
        <>
          <div>이름</div>
          <div>{name}</div>
        </>
      )}
      {signInID && (
        <>
          <div>로그인 ID</div>
          <div>{signInID}</div>
        </>
      )}
      {joinDate && (
        <>
          <div>가입일</div>
          <div>{joinDate}</div>
        </>
      )}
      {endDate && (
        <>
          <div>남은 학습 기간</div>
          <div>{endDate}일</div>
        </>
      )}
      {groupClass && (
        <>
          <div>소속반</div>
          <div>{groupClass}</div>
        </>
      )}
    </div>
  );
}
