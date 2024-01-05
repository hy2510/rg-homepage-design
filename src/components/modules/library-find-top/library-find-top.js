import style from "./library-find-top.module.scss";

export function LibraryFindTop({ title, imgSrc }) {
  return (
    <div
      className={style.library_find_top}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={style.light_box}>{title}</div>
    </div>
  );
}
