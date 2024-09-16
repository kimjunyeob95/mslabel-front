"use client";
import styled from "styled-components";
import BrandLabelContainer from "./(main)/BrandLabelContainer";
import DescrptionContainer from "./(main)/DescriptionContainer";
import InquiryContainer from "./(main)/InquiryContainer";
import IntroduceContainer from "./(main)/IntroduceContainer";
import { instance } from "./util/instance";
import { useEffect } from "react";

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
  const handleLogin = async () => {
    try {
      const response = await instance.post("token/create", {
        user_id: "tester123",
        password: "1234",
      });

      if (response) {
        localStorage.setItem("token", `Bearer ${response.data.token}`);

        console.log(response);
      }
    } catch (error) {
      console.log(error, "login error");
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <AppLayout>
      <div
        style={{ width: "1920px", height: "560px", backgroundColor: "#d9d9d9" }}
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
