"use client";
import React from "react";
import styled from "styled-components";

import InquiryContainer from "@/app/(main)/InquiryContainer";
import ThumbnailContainer from "../components/ThumbnailContainer";
import ProductInfoContainer from "../components/ProductInfoContainer";
import EstimateContainer from "../components/EstimateContainer";
import { useLabelDetailHooks } from "../hooks/useLabelDetailHooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 80px;
`;

const DetailInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
  padding: 80px 0;
  width: 100%;
  max-width: 1288px;
`;

const LabelDetailPage = () => {
  const { basicLabelDetailItem } = useLabelDetailHooks();

  return (
    <Container>
      {basicLabelDetailItem && (
        <DetailInformationContainer>
          <ThumbnailContainer basicLabelDetailItem={basicLabelDetailItem} />
          <ProductInfoContainer basicLabelDetailItem={basicLabelDetailItem} />
        </DetailInformationContainer>
      )}
      <EstimateContainer />
      <InquiryContainer />
    </Container>
  );
};

export default LabelDetailPage;
