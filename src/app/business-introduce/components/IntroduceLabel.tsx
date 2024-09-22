"use client";
import {
  IMAGE_BUSINESS_BRANDLABEL,
  IMAGE_BUSINESS_DIGITALLABEL,
  IMAGE_BUSINESS_SIMPLELABEL,
} from "@/app/assets/image";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  padding: 80px 0px;
  width: 100%;
  background: #f9f9fc;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Text = styled.span`
  color: #414141;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

const SubText = styled.span`
  color: #868686;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1278px;
`;

const CardItem = styled.div<{ rowStyle: string }>`
  display: flex;
  flex-direction: ${(props) => props.rowStyle};
  align-items: center;
  justify-content: space-between;
  gap: 65px;
`;

const Card = styled.div`
  width: 784px;
  height: 364px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #d9d9d9;
`;

const IntroduceLabel = () => {
  return (
    <Container>
      <Column>
        <Text>라벨의 시작과 끝, 명성라벨</Text>
        <Text style={{ fontSize: "32px", color: "#000", fontWeight: "700" }}>
          어떤 라벨이 있는지 알려드릴게요
        </Text>
      </Column>
      <CardContainer>
        <CardItem rowStyle="row">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              브랜드 라벨
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              제품의 정체성과 가치를 직접적으로 전달하는 브랜드 라벨, 각 제품에
              맞춤형으로 제작된 라벨은 브랜드 이미지를 완벽하게 표현하며, 브랜드
              로고, 색상, 디자인 등 고객에게 인상을 남기기 위한 차별화된
              라벨입니다.
            </SubText>
          </Column>
          <Image
            src={IMAGE_BUSINESS_BRANDLABEL}
            alt="business brand label thumbnail"
            width={785}
          />
        </CardItem>
        <CardItem rowStyle="row-reverse">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>단순 라벨</Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              바코드, 안내사항 등 필수 정보를 간단하고 명확하게 전달하는 데
              최적화되어 있습니다. 1~2개 컬러를 사용하기에 경제적이며 효율적인
              라벨입니다. 필수 정보를 명확하게 표시하여 제품 관리와 소비자
              편의성을 높이는데 도움을 주는 라벨입니다.
            </SubText>
          </Column>
          <Image
            src={IMAGE_BUSINESS_SIMPLELABEL}
            alt="business simple label thumbnail"
            width={785}
          />
        </CardItem>
        <CardItem rowStyle="row">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              디지털 인쇄
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              국내에서도 손에 꼽히는 최신 디지털 장비를 통해 정교하고 복잡한
              디자인도 완벽하게 구현할 수 있습니다. 그렇기에 다양한 디자인을
              정밀하고 신속하게 반영할 수 있습니다. 특히 그래픽이 많은 경우에
              최적화된 라벨입니다.
            </SubText>
          </Column>
          <Image
            src={IMAGE_BUSINESS_DIGITALLABEL}
            alt="business digital label thumbnail"
            width={785}
          />
        </CardItem>
      </CardContainer>
    </Container>
  );
};

export default IntroduceLabel;
