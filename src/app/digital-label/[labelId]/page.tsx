"use client";
import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";

import InquiryContainer from "@/app/(main)/InquiryContainer";
import BasicLabelDetailContainer from "@/app/basic-label/components/BasicLabelDetailContainer";
import { MOCK_DATA } from "@/app/basic-label/page";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;
const DigitalLabelDetailPage = () => {
  const params = useParams<{ labelId: string }>();

  const renderDigitalLabelDetail = () => {
    switch (params.labelId) {
      case "1":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="용도별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "2":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="형태별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "3":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="원단별 라벨입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );
      case "4":
        return (
          <BasicLabelDetailContainer
            data={MOCK_DATA}
            title="파우치 인쇄입니다"
            description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <Container>
      {renderDigitalLabelDetail()}
      <InquiryContainer />
    </Container>
  );
};

export default DigitalLabelDetailPage;
