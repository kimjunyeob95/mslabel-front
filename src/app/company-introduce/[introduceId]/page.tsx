"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import styled from "styled-components";
import { ICON_INTRODUCE_LOGO } from "@/app/assets/svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 100px 0 120px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.div`
  color: #383838;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

const DescriptionBold = styled(Description)`
  font-weight: 700;
`;

const MoreButton = styled.div`
  display: flex;
  padding: 16px 87px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  border: 1px solid #3870aa;

  color: #3870aa;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const page = () => {
  const params = useParams<{ introduceId: string }>();

  return (
    <Container>
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "#d9d9d9" }}
      />
      <IntroduceContainer>
        <TitleContainer>
          <Image src={ICON_INTRODUCE_LOGO} alt="introduce logo" />
          <Title>라벨의 기준, 명성라벨</Title>
        </TitleContainer>
        <DescriptionContainer>
          <DescriptionItem>
            <Description>
              명성을 이용해 주시는 고객 여러분께 항상 감사드립니다.
            </Description>
            <Description>
              <DescriptionBold>
                "더 빠르고, 더 정확하게, 더 창의적으로"
              </DescriptionBold>
              를 외치며 지난 30년을 정신없이 달려왔습니다
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              명성라벨은 1994년 설립하여 30년 된 인쇄 경력을 토대로 풍부한
              경험과 기술력 확보 및 2016년 수지 CTP 도입,
            </Description>
            <Description>
              2023년 앱손 디지털 기계 도입으로 타사보다 인쇄 퀄리티에서 앞선
              기술로 차별화를 두고 있습니다.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              CTP 출력으로 해상도 상승과 더 빠른 속도를 바탕으로 가격 경쟁력 및
              인쇄 퀄리티가 월등하며
            </Description>
            <Description>
              3단계 QC를 통하여 우수한 제품만 출고합니다.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              로타리 8도 인쇄기 보유로 2중지, 3중지, 금박, 형합, 타공, 부분코팅,
              실크 인쇄 및 부분 골작업, POP 인쇄 시스템으로
            </Description>
            <Description>
              고객이 요구하는 특수라벨을 만들 수 있으며 2교대로 풀 가동되고
              있습니다.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              앱손 디지털 기계 도입으로 선명한 색감과 다양한 그래픽 표현이
              용이해졌으며
            </Description>
            <Description>
              빠르고 합리적인 가격으로 제품을 제공할 수 있습니다.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              화장품, 건강기능식품, 제약회사 등 현재 400곳 이상 거래처와 함께
              꾸준히 성장하고 있으며
            </Description>
            <Description>신규 업체가 계속적으로 늘어나고 있습니다.</Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              30년 동안 축적된 신뢰와 열정을 토대로 항상 믿음직한 파트너로서
            </Description>
            <Description>
              미래에도 변함없는 품질과 혁신, 고객 중심 서비스로 더 나은 가치를
              위해 끊임없이 연구하고 개발하여 더욱 성장해가는
            </Description>
            <Description>명성이 되겠습니다.</Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              지난 30년 간의 지원에 감사드리며, 앞으로도 변함없는 협력을
              부탁드립니다.
            </Description>
            <Description>
              고객의 성공이 우리의 성공이며, 우리의 목표는 고객의 만족과 성공을
              뒷받침 하는 것입니다.
            </Description>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              명성라벨 대표
              <DescriptionBold style={{ marginLeft: "16px", fontSize: "20px" }}>
                박용현
              </DescriptionBold>
            </Description>
          </DescriptionItem>
          <MoreButton>브로슈어 다운받기</MoreButton>
        </DescriptionContainer>
      </IntroduceContainer>
    </Container>
  );
};

export default page;
