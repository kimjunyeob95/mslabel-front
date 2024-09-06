"use client";
import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import InquiryContainer from "@/app/(main)/InquiryContainer";
import { MOCK_DATA } from "../page";
import BasicLabelDetailContainer from "../components/BasicLabelDetailContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

const BasicLabelDetailPage = () => {
  const params = useParams<{ labelId: string }>();

  const renderBasicLabelDetail = () => {
    switch (params.labelId) {
      case "1":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="업종별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "2":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="특수 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "3":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="전문 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "4":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="원단별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <Container>
      {renderBasicLabelDetail()}
      <InquiryContainer />
    </Container>
  );
};

export default BasicLabelDetailPage;
