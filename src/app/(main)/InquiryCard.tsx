"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 37px 78px;
  background-color: #fff;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #383838;
`;

interface InquiryCardIProps {
  icon: any;
  title: string;
  content: string;
}

const InquiryCard: React.FC<InquiryCardIProps> = (props) => {
  const { icon, title, content } = props;

  return (
    <Contaienr>
      <Image src={icon} alt="inquiry icon" />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Contaienr>
  );
};

export default InquiryCard;
