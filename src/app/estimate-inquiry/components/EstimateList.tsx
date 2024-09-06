import React from "react";
import styled from "styled-components";

const EstimateGrid = styled.div`
  display: grid;
  grid-template-columns: 60.7% 10.5% 14.4% 14.4%; /* 비율 적용 */
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1278px;
`;

const EstimateTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  background: #f3f3f3;

  color: #000;
  text-align: center;

  /* Sub title */
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 190% */
`;

const EstimateContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;

  border-bottom: 0.5px solid #dadada;
  background: #fff;
  color: var(--Text-Main, #414141);

  /* Content txt */
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const EstimateList = () => {
  return (
    <EstimateGrid>
      <EstimateTitle>제목</EstimateTitle>
      <EstimateTitle>의뢰인</EstimateTitle>
      <EstimateTitle>의뢰인</EstimateTitle>
      <EstimateTitle>진행사항</EstimateTitle>
      <EstimateContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </EstimateContents>
      <EstimateContents>박o진</EstimateContents>
      <EstimateContents>2024.04.01</EstimateContents>
      <EstimateContents>답변 준비중</EstimateContents>
      <EstimateContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </EstimateContents>
      <EstimateContents>박o진</EstimateContents>
      <EstimateContents>2024.04.01</EstimateContents>
      <EstimateContents>답변 준비중</EstimateContents>
      <EstimateContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </EstimateContents>
      <EstimateContents>박o진</EstimateContents>
      <EstimateContents>2024.04.01</EstimateContents>
      <EstimateContents>답변 준비중</EstimateContents>
      <EstimateContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </EstimateContents>
      <EstimateContents>박o진</EstimateContents>
      <EstimateContents>2024.04.01</EstimateContents>
      <EstimateContents>답변 준비중</EstimateContents>
    </EstimateGrid>
  );
};

export default EstimateList;
