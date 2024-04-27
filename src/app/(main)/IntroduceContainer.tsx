"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1920px;
  padding: 80px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #143e7e;
`;

const Title = styled.div`
  color: #fff;

  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const Description = styled.div`
  color: #fff;
  text-align: center;

  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

const StartButton = styled.div`
  display: flex;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #fff;

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  color: #143e7e;
`;

const IntroduceContainer = () => {
  return (
    <Container>
      <Title>
        라벨의 시작과 끝<br />
        이제 명성과 함께 하세요
      </Title>
      <Description>
        고객의 오랜 고민을 덜 수 있도록 좋은 퀄리티로 보답하겠습니다.
      </Description>
      <StartButton>시작하기</StartButton>
    </Container>
  );
};

export default IntroduceContainer;
