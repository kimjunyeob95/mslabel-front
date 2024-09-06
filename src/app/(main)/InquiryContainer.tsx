"use client";
import React from "react";
import styled from "styled-components";
import {
  ICON_INQUIRY_EMAIL,
  ICON_INQUIRY_MESSAGE,
  ICON_INQUIRY_PHONE,
} from "../assets/svg";
import InquiryCard from "./InquiryCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  width: 100%;
  height: 610px;
  background-color: #eff5ff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;

  color: #000;
  text-align: center;
`;

const Description = styled.div`
  color: #414141;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

const InquiryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`;

const InquiryContainer = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          도움이 필요하실 때는
          <br />
          언제든지 상담이 가능해요
        </Title>
        <Description>
          명성라벨은 연중무휴 열려있어요. 궁금한 점이 생기면 바로 문의해 주세요.
        </Description>
      </TextContainer>
      <InquiryItem>
        <InquiryCard
          icon={ICON_INQUIRY_PHONE}
          title="02-2279-1701"
          content="오전 9시 ~ 오후 6시 운영 고객센터"
        />
        <InquiryCard
          icon={ICON_INQUIRY_MESSAGE}
          title="견적문의하기"
          content="24시간 운영하는 온라인 견적문의"
        />
        <InquiryCard
          icon={ICON_INQUIRY_EMAIL}
          title="pyh1707@daum.net"
          content="주문서, 견적문의, 자료 전송 이메일"
        />
      </InquiryItem>
    </Container>
  );
};

export default InquiryContainer;
