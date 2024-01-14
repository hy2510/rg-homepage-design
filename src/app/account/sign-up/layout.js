import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Layout({ children }) {
  return <div className={style.sign_up_box}>{children}</div>;
}
