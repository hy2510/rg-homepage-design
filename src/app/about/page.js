import Image from "next/image";
import stylesPc from "./page.module.scss";

const style = stylesPc;

export default function Home() {
  return (
    <main style={{ padding: 0 }}>
      <iframe
        title="External Content"
        width="100%"
        src="/src/html/landing-page/index.html"
        frameBorder="0"
        className={style.iframe}
      />
    </main>
  );
}
