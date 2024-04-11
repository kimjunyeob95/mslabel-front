"use client";
import React from "react";
import styled from "styled-components";
import {
  ICON_DISCOUNT,
  ICON_HIGHT_QUALITY,
  ICON_QUICK_MAKE,
} from "../assets/svg";
import DescriptionCard from "./DescriptionCard";
import NotificationCard from "./NotificationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1372px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 0;
  width: 100%;
`;

const CompanyNotification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  padding: 80px 0;
  width: 100%;
  border: 1px solid red;
`;

const NotificationTitle = styled.div`
  font-size: 44px;
  font-weight: 700;
  color: #000;
`;

const NotificationCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 41px;
`;

const DescrptionContainer = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionCard
          image={ICON_HIGHT_QUALITY}
          title="높은 퀄리티"
          description="다년간 노하우를 바탕으로"
          secondDescription="최고의 퀄리티를 자부합니다."
        />
        <DescriptionCard
          image={ICON_QUICK_MAKE}
          title="빠른 제작"
          description="원하는 시간에 맞춰"
          secondDescription="높은 품질로 신속하게 작업합니다."
        />
        <DescriptionCard
          image={ICON_DISCOUNT}
          title="합리적인 가격"
          description="고품질의 서비스를"
          secondDescription="합리적인 가격으로 제공합니다."
        />
      </DescriptionContainer>
      <CompanyNotification>
        <NotificationTitle>명성은 이런 일을 합니다</NotificationTitle>
        <NotificationCardContainer>
          <NotificationCard
            thumbnail=""
            title="브랜드 라벨"
            description="화장품, 제약, 식품, 특수라벨 등 제품용 라벨입니다.
            대량, 3도 이상, 컬러가 많을 때 추천합니다."
          />
          <NotificationCard
            thumbnail=""
            title="단순 라벨"
            description="바코드, 제조일자, 배달 스티커 등 단순한 라벨입니다. 소량, 1도, 2도, 컬러가 적을 때 추천합니다."
          />
          <NotificationCard
            thumbnail=""
            title="디지털 라벨"
            description={`뛰어난 해상도와 정교한 색상이 표현되는 라벨입니다.
            다양한 그래픽과 효과가 많은 라벨에 추천합니다.`}
          />
        </NotificationCardContainer>
      </CompanyNotification>
    </Container>
  );
};

export default DescrptionContainer;
