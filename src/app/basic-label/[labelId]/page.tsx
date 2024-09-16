"use client";
import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import InquiryContainer from "@/app/(main)/InquiryContainer";
import { MOCK_DATA } from "../page";
import BasicLabelDetailContainer from "../components/BasicLabelDetailContainer";
import { useBasicLabelHooks } from "../hooks/useLabelHooks";
import { parse } from "query-string-for-all";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100%;
`;

const BasicLabelDetailPage = () => {
  const params = useParams<{ labelId: string }>();
  const { sub_id } = parse(window.location.search);

  const { basicLabelList } = useBasicLabelHooks();

  console.log(basicLabelList, "<<");

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
