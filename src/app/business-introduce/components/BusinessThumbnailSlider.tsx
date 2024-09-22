"use client";
import { IMAGE_BUSINESS_INTRODUCE_THUMBNAIL } from "@/app/assets/image";
import Column from "@/app/components/Column";
import Text from "@/app/components/Text";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;

  background: var(--Background-Gray, #f9f9fc);
`;

const InquiryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 24px;
  border-radius: 100px;
  border: none;
  background: var(--Background-Blue, #143e7e);

  color: #fff;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 271.429% */
`;

const BusinessThumbnailSlider = () => {
  const router = useRouter();

  return (
    <Container>
      <Column gap="26px">
        <Column gap="8px">
          <Text
            color="#2a4b6d"
            size="32px"
            weight={700}
            style={{ lineHeight: "42px" }}
          >
            라벨의 기준, 명성라벨
          </Text>
          <Text color="#414141" size="20px">
            명성라벨은 최고의 인쇄 기술과 차별화된 상품으로 고객의 만족을
            최우선으로 생각합니다.
          </Text>
        </Column>
        <InquiryButton onClick={() => router.push("/estimate-inquiry")}>
          문의하기
        </InquiryButton>
      </Column>
      <Image
        src={IMAGE_BUSINESS_INTRODUCE_THUMBNAIL}
        alt="business introduce thumbnail"
        width={970}
      />
    </Container>
  );
};

export default BusinessThumbnailSlider;
