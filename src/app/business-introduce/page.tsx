"use client";
import React from "react";
import styled from "styled-components";
import InquiryContainer from "../(main)/InquiryContainer";
import BusinessThumbnailSlider from "./components/BusinessThumbnailSlider";
import ClientIntroduce from "./components/ClientIntroduce";
import IntroduceLabel from "./components/IntroduceLabel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BusinessIntroducePage = () => {
  return (
    <Container>
      <BusinessThumbnailSlider />
      <ClientIntroduce />
      <IntroduceLabel />
      <InquiryContainer />
    </Container>
  );
};

export default BusinessIntroducePage;
