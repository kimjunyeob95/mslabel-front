import Image from "next/image";
import DescrptionContainer from "./(main)/DescrptionContainer";
import { Header } from "./components/Header";
import styles from "./page.module.css"; // CSS 모듈을 임포트합니다.

export default function Home() {
  return (
    <div className="maincontainer">
      <Header />
      <div className="w-[1920px] h-[560px] bg-[#D9D9D9]"></div>
      <DescrptionContainer />
      {/* 컨테이너 스타일 적용 */}
      {/* <Image
        src="/renewal_img.jpeg"
        alt="리뉴얼 이미지"
        width={800} // 원하는 너비값
        height={800} // 원하는 높이값
        layout="intrinsic" // 또는 다른 레이아웃 옵션
        className={styles.image} // 이미지 스타일 적용
      /> */}
    </div>
  );
}
