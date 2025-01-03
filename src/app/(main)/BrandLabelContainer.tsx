import React from "react";
import styled from "styled-components";
import {
  IMAGE_INTERIORLABEL_THUMBNAIL,
  IMAGE_MAKELABEL_THUMBNAIL,
  IMAGE_MARKETINGLABEL_THUMBNAIL,
  IMAGE_PRODUCTLABEL_THUMBNAIL,
} from "../assets/image";
import Image from "next/image";

const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding: 80px 10px;
  background-color: #fff;
`;

const Title = styled.div`
  color: #000;
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
`;

const LabelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  span {
    color: #000;

    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
  }
`;

const LabelCard = styled(Image)`
  width: 300px;
  height: 600px;
  background-color: #d9d9d9;
`;

const BrandLabelContainer = () => {
  return (
    <Contaienr>
      <Title>브랜드 라벨 전문 명성라벨입니다</Title>
      <LabelContainer>
        <LabelContent>
          <LabelCard src={IMAGE_PRODUCTLABEL_THUMBNAIL} alt="제품 라벨" />
          <span>제품 라벨</span>
        </LabelContent>
        <LabelContent>
          <LabelCard
            src={IMAGE_MARKETINGLABEL_THUMBNAIL}
            alt="홍보 안내 라벨"
          />
          <span>홍보, 안내 라벨</span>
        </LabelContent>
        <LabelContent>
          <LabelCard src={IMAGE_MAKELABEL_THUMBNAIL} alt="꾸미기 라벨" />
          <span>꾸미기 라벨</span>
        </LabelContent>
        <LabelContent>
          <LabelCard src={IMAGE_INTERIORLABEL_THUMBNAIL} alt="인테리어 라벨" />
          <span>인테리어 라벨</span>
        </LabelContent>
      </LabelContainer>
    </Contaienr>
  );
};

export default BrandLabelContainer;
