"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { ICON_SOCIAL_BLOG, ICON_SOCIAL_INSTAGRAM } from "../assets/svg";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;

const InformationContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1278px;
`;

const InformationContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;

  span {
    color: #414141;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.333px;
  }
`;

const SocialContents = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const InformationItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const InformationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  font-style: normal;

  line-height: 38px;
  font-feature-settings: "clig" off, "liga" off;

  p {
    font-weight: 500;
    color: #868686;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: #868686;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const InquiryButton = styled.div`
  display: flex;
  padding: 16px 87px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  border: 1px solid #868686;

  font-size: 16px;
  font-weight: 400;
  color: #000;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InformationContainer>
        <InformationContents>
          <InformationContentItem>
            <span>회사소개</span>
            <div style={{ height: "14px", border: "1px solid #868686" }} />
            <span>공지사항</span>
            <div style={{ height: "14px", border: "1px solid #868686" }} />
            <span>개인정보처리방침</span>
            <div style={{ height: "14px", border: "1px solid #868686" }} />
            <span>견적문의</span>
            <div style={{ height: "14px", border: "1px solid #868686" }} />
            <span>오시는길</span>
          </InformationContentItem>
          <SocialContents>
            <Image src={ICON_SOCIAL_BLOG} alt="blog social icon" />
            <Image src={ICON_SOCIAL_INSTAGRAM} alt="instagram social icon" />
          </SocialContents>
        </InformationContents>
      </InformationContainer>
      <InformationContainer style={{ gap: "7px", padding: "60px 0" }}>
        <InformationContents style={{ alignItems: "flex-end" }}>
          <InformationItemsContainer>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#414141",
                lineHeight: "24px",
              }}
            >
              명성라벨
            </div>
            <InformationContentItem style={{ marginTop: "10px" }}>
              <InformationItem>
                <p>상호</p>
                <span>명성라벨</span>
              </InformationItem>
              <InformationItem>
                <p>대표</p>
                <span>박용현</span>
              </InformationItem>
              <InformationItem>
                <p>사업자등록번호</p>
                <span>203-66-70867</span>
              </InformationItem>
              <InformationItem>
                <p>주소</p>
                <span>경기도 일산동구 장대길 86-69 (장항동)</span>
              </InformationItem>
            </InformationContentItem>
            <InformationContentItem>
              <InformationItem>
                <p>팩스</p>
                <span>02-2279-1727</span>
              </InformationItem>
              <InformationItem>
                <p>이메일</p>
                <span>pyh1707@daum.net</span>
              </InformationItem>
              <InformationItem>
                <p>웹하드</p>
                <span>ID : pyh1707 / PW : msyh1701</span>
              </InformationItem>
            </InformationContentItem>
            <InformationContentItem>
              <InformationItem>
                <span style={{ fontSize: "14px" }}>
                  Copyright 2024 by 명성라벨. All rights reserved
                </span>
              </InformationItem>
            </InformationContentItem>
          </InformationItemsContainer>
          <ContactContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <InformationItem>
                <p style={{ fontWeight: "400" }}>대표번호</p>
                <span
                  style={{ fontSize: "28px", fontWeight: "700", color: "#000" }}
                >
                  02-2279-1701
                </span>
              </InformationItem>
              <InformationItem>
                <span style={{ fontSize: "16px" }}>평일 09:00 ~ 18:00</span>
              </InformationItem>
            </div>
            <InquiryButton>온라인 문의하기</InquiryButton>
          </ContactContainer>
        </InformationContents>
      </InformationContainer>
    </FooterContainer>
  );
};

export default Footer;
