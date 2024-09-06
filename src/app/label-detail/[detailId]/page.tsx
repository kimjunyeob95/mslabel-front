"use client";
import React from "react";
import styled from "styled-components";

import InquiryContainer from "@/app/(main)/InquiryContainer";
import ThumbnailContainer from "../components/ThumbnailContainer";
import ProductInfoContainer from "../components/ProductInfoContainer";
import EstimateContainer from "../components/EstimateContainer";

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
  return (
    <Container>
      <DetailInformationContainer>
        <ThumbnailContainer />
        <ProductInfoContainer />
      </DetailInformationContainer>
      <EstimateContainer />
      <InquiryContainer />
    </Container>
  );
};

export default LabelDetailPage;
