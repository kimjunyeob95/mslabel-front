"use client";
import { RecordsEntity } from "@/app/util/LabelType";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 44px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #000;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const Description = styled.div`
  color: #414141;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const ProductInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  color: #000;

  font-size: 20px;
  font-style: normal;
  line-height: 38px;

  .name {
    font-weight: 700;
  }

  .kind {
    font-weight: 400;
  }
`;

const EstimateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 21px;
  width: 520px;
  background: #3870aa;

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.5px;

  cursor: pointer;
`;

interface ProductInfoContainerIProps {
  basicLabelDetailItem: RecordsEntity;
}

const ProductInfoContainer: React.FC<ProductInfoContainerIProps> = (props) => {
  const { basicLabelDetailItem } = props;

  return (
    <Container>
      <Column style={{ gap: "8px" }}>
        <Title>{basicLabelDetailItem.title}</Title>
        <Description>
          {basicLabelDetailItem.desc}
          {/* {`별도의 후가공 없이도 후가공 처리가 되어보이는 특수 라벨입니다.
           의 후가공 없이도 후가공 처리가 되어보이는 특수 라벨입니다.`} */}
        </Description>
      </Column>
      <ProductInformation>
        <Column style={{ gap: "25px" }}>
          <span className="name">원단</span>
          <span className="name">사이즈</span>
          <span className="name">형태</span>
          <span className="name">키워드</span>
          <span className="name">원단</span>
        </Column>
        <Column style={{ gap: "25px" }}>
          <span className="kind">{basicLabelDetailItem.material}</span>
          <span className="kind">{basicLabelDetailItem.size}</span>
          <span className="kind">{basicLabelDetailItem.shape}</span>
          <span className="kind">{basicLabelDetailItem.keywords}</span>
          <span className="kind">유포지</span>
        </Column>
      </ProductInformation>
      <EstimateButton>견적문의</EstimateButton>
    </Container>
  );
};

export default ProductInfoContainer;
