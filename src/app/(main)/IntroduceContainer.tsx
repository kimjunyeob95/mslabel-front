"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 400px;
  background-color: #143e7e;
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const Description = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #fff;
`;

const StartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 23px;
  border-radius: 35.5px;
  background-color: #fff;

  font-size: 18px;
  font-weight: 700;
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
