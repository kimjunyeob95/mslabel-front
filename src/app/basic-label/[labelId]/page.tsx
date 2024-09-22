"use client";
import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import InquiryContainer from "@/app/(main)/InquiryContainer";
import BasicLabelDetailContainer from "../components/BasicLabelDetailContainer";
import { useBasicLabelHooks } from "../hooks/useLabelHooks";
import { parse } from "query-string-for-all";
import Column from "@/app/components/Column";
import Text from "@/app/components/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 320px;
  background: var(--Background-Skyblue, #eff5ff);
`;

const BasicLabelDetailPage = () => {
  const params = useParams<{ labelId: string }>();
  const { group_id, sub_id } = parse(window.location.search);

  const { basicLabelList } = useBasicLabelHooks();

  const renderBasicLabelDetail = () => {
    switch (sub_id) {
      case "9":
        return (
          <BasicLabelDetailContainer
            basicLabelList={basicLabelList!}
            title="업종별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "10":
        return (
          <BasicLabelDetailContainer
            basicLabelList={basicLabelList!}
            title="특수 라벨입니다"
            description="제품의 독특한 특성과 기능성을 부각시키는 라벨로, 특정 용도에 맞춘 다양한 기술과 재질이 활용되는 라벨입니다."
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Column gap="24px">
          <Text color="#2a486d" size="32px" weight={700}>
            일반 라벨
          </Text>
          <Text
            color="#414141"
            size="20px"
            style={{ lineHeight: "32px", textAlign: "center" }}
          >
            프레스(1,2도)와 로타리(3도 이상) 기기로 제작하는 라벨입니다.
            <br />
            다품종 대량생산을 통해 비용 효율성을 극대화하며, 고객의 브랜드
            가치를 높이는 효과적인 라벨 솔루션입니다.
          </Text>
        </Column>
      </ImageContainer>
      {/* {basicLabelList && (
        <BasicLabelDetailContainer
          basicLabelList={basicLabelList}
          data={MOCK_DATA}
          title="업종별 라벨입니다"
          description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        />
      )} */}
      {basicLabelList && renderBasicLabelDetail()}
      <InquiryContainer />
    </Container>
  );
};

export default BasicLabelDetailPage;
