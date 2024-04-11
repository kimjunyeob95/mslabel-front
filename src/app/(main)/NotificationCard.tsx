"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

const CardThumbnail = styled.img`
  width: 100%;
  height: 282px;

  cursor: pointer;
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  color: #000;
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #000;
`;

const MoreText = styled.div`
  font-size: 14px;
  font-weight: 400;
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
      <Title>{title}</Title>
      <Description>{description}</Description>
      <MoreText>자세히보기</MoreText>
    </Container>
  );
};

export default NotificationCard;
