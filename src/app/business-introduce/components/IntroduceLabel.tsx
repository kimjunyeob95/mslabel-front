"use client";
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
        <Text>최고의 퀄리티로, 합리적인 가격으로, 빠르고 믿을 수 있게</Text>
        <Text style={{ fontSize: "32px", color: "#000", fontWeight: "700" }}>
          라벨 고민, 명성이 해결해드려요
        </Text>
      </Column>
      <CardContainer>
        <CardItem rowStyle="row">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              브랜드 라벨
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              제품을 홍보하고 <br />잘 보여지기 위한 라벨입니다.
            </SubText>
          </Column>
          <Card />
        </CardItem>
        <CardItem rowStyle="row-reverse">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              브랜드 라벨
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              제품을 홍보하고 <br />잘 보여지기 위한 라벨입니다.
            </SubText>
          </Column>
          <Card />
        </CardItem>
        <CardItem rowStyle="row">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              브랜드 라벨
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              제품을 홍보하고 <br />잘 보여지기 위한 라벨입니다.
            </SubText>
          </Column>
          <Card />
        </CardItem>
        <CardItem rowStyle="row-reverse">
          <Column style={{ alignItems: "flex-start" }}>
            <Text style={{ color: "#000", fontWeight: "700" }}>
              브랜드 라벨
            </Text>
            <SubText style={{ fontSize: "16px", color: "#868686" }}>
              제품을 홍보하고 <br />잘 보여지기 위한 라벨입니다.
            </SubText>
          </Column>
          <Card />
        </CardItem>
      </CardContainer>
    </Container>
  );
};

export default IntroduceLabel;
