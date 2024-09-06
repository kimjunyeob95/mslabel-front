"use Client";
import React from "react";
import styled from "styled-components";
import ClientCard from "./ClientCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  padding: 80px 0px;

  width: 100%;
  max-width: 1278px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  color: #414141;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

const ClientCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 38px;
  flex: 50%;
`;

const ClientIntroduce = () => {
  return (
    <Container>
      <Column>
        <Title>최고의 퀄리티로, 합리적인 가격으로, 빠르고 믿을 수 있게</Title>
        <Title style={{ fontSize: "32px", color: "#000", fontWeight: "700" }}>
          라벨 고민, 명성이 해결해드려요
        </Title>
      </Column>
      <ClientCardContainer>
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </ClientCardContainer>
    </Container>
  );
};

export default ClientIntroduce;
