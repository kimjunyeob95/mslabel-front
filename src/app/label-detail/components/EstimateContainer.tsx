"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding-bottom: 50px;
  width: 100%;
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

const HeadContent = styled.div<{ $isActive: boolean }>`
  display: flex;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: ${(props) => props.$isActive && "3px solid #3870aa"};

  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.607px;
`;

const Contents = styled.div`
  width: 1288px;
  height: 2482px;
  background: var(--Image-Gray, #d9d9d9);
`;

const EstimateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 21px;
  margin-top: 50px;
  width: 520px;
  background: #3870aa;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.5px;

  cursor: pointer;
`;

const EstimateContainer = () => {
  return (
    <Container>
      <HeadContainer>
        <HeadContent $isActive={true}>라벨 소개</HeadContent>
        <HeadContent $isActive={false}>작업가이드</HeadContent>
      </HeadContainer>
      <Contents />
      <EstimateButton>견적문의</EstimateButton>
    </Container>
  );
};

export default EstimateContainer;
