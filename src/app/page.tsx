"use client";
// import { useEffect } from "react";
import styled from "styled-components";
import BrandLabelContainer from "./(main)/BrandLabelContainer";
import DescrptionContainer from "./(main)/DescriptionContainer";
import InquiryContainer from "./(main)/InquiryContainer";
import IntroduceContainer from "./(main)/IntroduceContainer";
import Image from "next/image";
import {
  IMAGE_BANNER_THUMBNAIL,
} from "./assets/image";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <AppLayout>
      <Image
        src={IMAGE_BANNER_THUMBNAIL}
        alt="thumbnail"
        style={{ width: "100%" }}
        height={560}
      />
      <DescrptionContainer />
      <BrandLabelContainer />
      <InquiryContainer />
      <IntroduceContainer />

      {/* 컨테이너 스타일 적용 */}
      {/* <Image
        src="/renewal_img.jpeg"
        alt="리뉴얼 이미지"
        width={800} // 원하는 너비값
        height={800} // 원하는 높이값
        layout="intrinsic" // 또는 다른 레이아웃 옵션
        className={styles.image} // 이미지 스타일 적용
      /> */}
    </AppLayout>
  );
}
function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}

