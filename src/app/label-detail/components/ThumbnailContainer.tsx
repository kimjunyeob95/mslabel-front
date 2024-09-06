"use client";
import { IMAGE_NOTIFICATION_THUMBNAIL } from "@/app/assets/image";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

const MainThumbnail = styled(Image)`
  width: 600px;
  height: 600px;
`;

const SubThumbnail = styled(Image)`
  width: 110px;
  height: 110px;
`;

const ThumbnailContainer = () => {
  return (
    <Container>
      <MainThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="main thumbnail" />
      <Row>
        <SubThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="sub thumbnail" />
        <SubThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="sub thumbnail" />
        <SubThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="sub thumbnail" />
        <SubThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="sub thumbnail" />
        <SubThumbnail src={IMAGE_NOTIFICATION_THUMBNAIL} alt="sub thumbnail" />
      </Row>
    </Container>
  );
};

export default ThumbnailContainer;
