import Image from "next/image";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Page() {
  return <main className={style.main}></main>;
}
