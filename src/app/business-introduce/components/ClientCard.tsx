"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  padding: 68px 154px;
  border-radius: 20px;
  background: #f9f9fc;
`;

const Title = styled.div`
  color: #000;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const Count = styled.div`
  color: #2550c0;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 105% */
`;

const Description = styled.div`
  color: #868686;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

interface ClientCardIProps {}

const ClientCard = () => {
  return (
    <Container>
      <Title>진행 중인 거래처</Title>
      <Count>400곳</Count>
      <Description>
        화장품, 건강 기능 식품, 제약회사 등<br /> 꾸준히 신규 업체가 늘어나고
        있습니다.
      </Description>
    </Container>
  );
};

export default ClientCard;
