"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import Column from "@/app/components/Column";
import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import InputForm from "../components/InputForm";
import DetailServiceForm from "./components/DetailServiceForm";
import CustomButton from "@/app/components/CustomButton";
import { useEstimateInquiryHooks } from "../hooks/useEstimateInquiryHooks";
import { IMAGE_ESTIMATE_COMPLETE } from "@/app/assets/image";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px 0;
  padding: 0 0 80px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1278px;
`;

const EstimateCreatePage = () => {
  const router = useRouter();

  const {
    estimateParams,
    isComplete,
    handleSetEstimateParams,
    handleCreateEstimateBoard,
  } = useEstimateInquiryHooks();

  console.log(estimateParams, "<Fd");

  if (isComplete) {
    return (
      <Container
        style={{ justifyContent: "center", gap: "125px", minHeight: "80vh" }}
      >
        <Column gap="33px">
          <Image
            src={IMAGE_ESTIMATE_COMPLETE}
            alt="estimate complete"
            width={72}
            height={72}
          />
          <Text color="#2a4b6d" size="32px" weight={700}>
            견적문의 완료!
          </Text>
          <Column gap="10px">
            <Text color="#868686" size="20px" weight={400}>
              명성라벨에 견적문의를 주셔서 감사합니다.
            </Text>
            <Text color="#868686" size="20px" weight={400}>
              최대한 빠르게 답변드리겠습니다.
            </Text>
          </Column>
        </Column>
        <CustomButton
          text="메인으로"
          onClick={() => router.push("/")}
          style={{ width: "520px" }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Column gap="24px" style={{ paddingTop: "80px", width: "100%" }}>
        <Text size="32px" weight={700}>
          견적문의
        </Text>
        <Text color="#868686" size="20px" weight={700}>
          궁금한 사항을 남겨주시면 최대한 빠르게 답변드리겠습니다.
        </Text>
      </Column>
      <Column gap="44px" align="flex-start">
        <Text color="#000" size="32px" weight={700}>
          기본정보
        </Text>
        <Column gap="36px">
          <Row
            gap="56px"
            style={{
              width: "100%",
            }}
          >
            <InputForm
              title="회사명"
              isRequired={true}
              placeholder="회사명을 입력해주세요."
              value={estimateParams.company}
              target="company"
              onChange={handleSetEstimateParams}
            />
            <InputForm
              title="담당자 성명"
              isRequired={true}
              placeholder="담당자 성명을 입력해주세요."
              value={estimateParams.contact_name}
              target="contact_name"
              onChange={handleSetEstimateParams}
            />
          </Row>
          <Row
            gap="56px"
            style={{
              width: "100%",
            }}
          >
            <InputForm
              title="이메일 주소"
              isRequired={true}
              placeholder="안내 메일 받으실 이메일 주소를 입력해주세요."
              value={estimateParams.contact_email}
              target="contact_email"
              onChange={handleSetEstimateParams}
            />
            <InputForm
              title="휴대폰 번호"
              isRequired={true}
              placeholder="휴대폰 번호를 ‘-’없이 입력해주세요."
              value={estimateParams.contact_phone}
              target="contact_phone"
              onChange={handleSetEstimateParams}
            />
          </Row>
          <Row
            gap="56px"
            style={{
              width: "100%",
            }}
          >
            <InputForm
              title="제목"
              isRequired={true}
              placeholder="제목을 작성해주세요."
              value={estimateParams.title}
              target="title"
              onChange={handleSetEstimateParams}
            />
            <InputForm
              title="비밀번호"
              isRequired={true}
              placeholder="비밀글로 고객님이 확인할 때 사용할 비밀번호를 입력해주세요."
              value={estimateParams.password}
              target="password"
              onChange={handleSetEstimateParams}
            />
          </Row>
        </Column>
        <DetailServiceForm
          estimateParams={estimateParams}
          handleSetEstimateParams={handleSetEstimateParams}
          type="create"
        />
        <Column>
          <CustomButton
            text="견적문의하기"
            onClick={() => {
              handleCreateEstimateBoard();
            }}
            style={{ padding: "21px 0", width: "520px" }}
          />
        </Column>
      </Column>
    </Container>
  );
};

export default EstimateCreatePage;
