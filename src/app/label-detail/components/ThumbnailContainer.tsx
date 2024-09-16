"use client";
import { IMAGE_NOTIFICATION_THUMBNAIL } from "@/app/assets/image";
import { RecordsEntity } from "@/app/util/LabelType";
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

interface ThumbnailContainerIProps {
  basicLabelDetailItem: RecordsEntity;
}

const ThumbnailContainer: React.FC<ThumbnailContainerIProps> = (props) => {
  const { basicLabelDetailItem } = props;

  return (
    <Container>
      <MainThumbnail
        src={basicLabelDetailItem.main_img}
        alt="main thumbnail"
        width={600}
        height={600}
      />
      <Row>
        <SubThumbnail
          src={basicLabelDetailItem.bottom_img1}
          alt="sub thumbnail"
          width={110}
          height={110}
        />
        {basicLabelDetailItem.bottom_img2 && (
          <SubThumbnail
            src={IMAGE_NOTIFICATION_THUMBNAIL}
            alt="sub thumbnail2"
            width={110}
            height={110}
          />
        )}
        {basicLabelDetailItem.bottom_img3 && (
          <SubThumbnail
            src={basicLabelDetailItem.bottom_img3}
            alt="sub thumbnai3"
            width={110}
            height={110}
          />
        )}
        {basicLabelDetailItem.bottom_img4 && (
          <SubThumbnail
            src={basicLabelDetailItem.bottom_img4}
            alt="sub thumbnai4"
            width={110}
            height={110}
          />
        )}
        {basicLabelDetailItem.bottom_img5 && (
          <SubThumbnail
            src={basicLabelDetailItem.bottom_img5}
            alt="sub thumbnai5"
            width={110}
            height={110}
          />
        )}
      </Row>
    </Container>
  );
};

export default ThumbnailContainer;
