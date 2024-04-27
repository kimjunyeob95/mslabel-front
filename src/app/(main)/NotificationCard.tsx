"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const CardThumbnail = styled(Image)`
  width: 100%;
  height: 271px;

  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  color: #000;
`;

const Description = styled.div`
  color: #414141;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const MoreText = styled.div`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  color: #3870aa;
  cursor: pointer;
`;

interface NotificationCardIProps {
  thumbnail: string;
  title: string;
  description: string;
}

const NotificationCard: React.FC<NotificationCardIProps> = (props) => {
  const { thumbnail, title, description } = props;

  return (
    <Container>
      <CardThumbnail src={thumbnail} alt="notification thumbnail image" />
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MoreText>자세히보기</MoreText>
      </ContentContainer>
    </Container>
  );
};

export default NotificationCard;
