"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { ICON_INTRODUCE_LOGO } from "@/app/assets/svg";
import {
  IMAGE_COMPANY_CEO,
  IMAGE_COMPANY_CLIENT,
  IMAGE_COMPANY_HISTORY,
  IMAGE_COMPANY_VISION,
} from "@/app/assets/image";
import { useParams } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 100px 0 120px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Title = styled.div`
  color: #383838;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

const DescriptionBold = styled(Description)`
  font-weight: 700;
`;

const MoreButton = styled.div`
  display: flex;
  padding: 16px 87px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 8px;
  border: 1px solid #3870aa;

  color: #3870aa;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const CompanyIntroducePage = () => {
  const params = useParams<{ introduceId: string }>();

  const renderCompanyIntroduce = (): JSX.Element => {
    switch (params.introduceId) {
      case "1": {
        return (
          <Image src={IMAGE_COMPANY_CEO} alt="ceo introduce" width={1288} />
        );
      }
      case "2": {
        return (
          <Image src={IMAGE_COMPANY_HISTORY} alt="ceo introduce" width={1288} />
        );
      }
      case "3": {
        return (
          <Image src={IMAGE_COMPANY_VISION} alt="ceo introduce" width={1288} />
        );
      }
      case "4": {
        return (
          <Image src={IMAGE_COMPANY_CLIENT} alt="ceo introduce" width={1288} />
        );
      }
      default:
        return <></>;
    }
  };

  return renderCompanyIntroduce();
};

export default CompanyIntroducePage;
