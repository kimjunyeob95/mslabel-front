"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  padding: 68px 40px;
  border-radius: 20px;
  background: #f9f9fc;
`;

const Title = styled.div`
  color: #000;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const Count = styled.div`
  color: #2550c0;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 105% */
`;

const Description = styled.div`
  color: #868686;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

interface ClientCardIProps {
  section: string;
}

const ClientCard: React.FC<ClientCardIProps> = (props) => {
  const { section } = props;

  const renderClientSectionCard = (): JSX.Element => {
    switch (section) {
      case "first": {
        return (
          <Container>
            <Title>진행 중인 거래처</Title>
            <Count>400곳</Count>
            <Description>
              화장품, 건강 기능 식품, 제약회사 등<br /> 꾸준히 신규 업체가
              늘어나고 있습니다.
            </Description>
          </Container>
        );
      }
      case "second": {
        return (
          <Container>
            <Title>뛰어난 기술자와 다양한 기계</Title>
            <Count>30년</Count>
            <Description>
              최신 디지털 장비와 숙련된 기술진들의 전문성을 바탕으로, <br />
              고객의 브랜드를 돋보이게 하는 라벨 솔루션을 제공하고 있습니다.
            </Description>
          </Container>
        );
      }
      case "third": {
        return (
          <Container>
            <Title>불량률, 만족도</Title>
            <Count>0%, 100%</Count>
            <Description>
              불량률 제로를 만들어 최고의 결과물을 제공하며 <br />
              고객이 만족할 때까지 노력하고 있습니다.
            </Description>
          </Container>
        );
      }
      case "fourth": {
        return (
          <Container>
            <Title>비용 절감</Title>
            <Count>20%</Count>
            <Description>
              고객사의 니즈에 맞춘 여러 방안을 제공하여,
              <br />
              명성라벨 거래처들은 평균 제작비 20%를 절감할 수 있었어요.
            </Description>
          </Container>
        );
      }
      default:
        return <></>;
    }
  };

  return renderClientSectionCard();
};

export default ClientCard;
