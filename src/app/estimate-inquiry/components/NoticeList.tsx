import React from "react";
import styled from "styled-components";

const NoticeGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; /* 비율 적용 */
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1278px;
`;

const NoticeTitle = styled.div`
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

const NoticeContents = styled.div`
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

const NoticeList = () => {
  return (
    <NoticeGrid>
      <NoticeTitle>제목</NoticeTitle>
      <NoticeTitle>의뢰인</NoticeTitle>
      <NoticeContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </NoticeContents>
      <NoticeContents>박o진</NoticeContents>
      <NoticeContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </NoticeContents>
      <NoticeContents>답변 준비중</NoticeContents>
      <NoticeContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </NoticeContents>
      <NoticeContents>박o진</NoticeContents>
      <NoticeContents style={{ justifyContent: "flex-start" }}>
        라벨인쇄 견적문의 드립니다.
      </NoticeContents>
      <NoticeContents>박o진</NoticeContents>
    </NoticeGrid>
  );
};

export default NoticeList;
