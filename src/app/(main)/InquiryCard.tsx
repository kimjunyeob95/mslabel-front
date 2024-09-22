"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Contaienr = styled.div`
  display: flex;
  width: 413px;
  padding: 37px 62px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border-radius: 20px;
`;

const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -5px;
`;

const Title = styled.p`
  color: #000;
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 53.333px;
  letter-spacing: -0.36px;
`;

const Content = styled.span`
  color: #414141;
  text-align: center;

  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

interface InquiryCardIProps {
  icon: any;
  title: string;
  content: string;
}

const InquiryCard: React.FC<InquiryCardIProps> = (props) => {
  const { icon, title, content } = props;

  const router = useRouter();

  return (
    <Contaienr
      onClick={() => {
        if (title === "견적문의하기") router.push("/estimate-inquiry");
      }}
      style={{ cursor: title === "견적문의하기" ? "pointer" : "" }}
    >
      <Image src={icon} alt="inquiry icon" />
      <CardItemContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </CardItemContainer>
    </Contaienr>
  );
};

export default InquiryCard;
