import style from "./todo-list.module.scss";
import Link from "next/link";

// 학습메인 > 사용자의 진행중인 학습 리스트
export function ExpTodoList({ children }) {
  return (
    <div className={style.todo_list}>
      <div className={style.txt_h}>진행중인 학습</div>
      <div className={style.row}>
        {children}
        <Link
          href="/library/find/assignment/to-do"
          className={style.more_button}
        >
          더보기
        </Link>
      </div>
    </div>
  );
}
