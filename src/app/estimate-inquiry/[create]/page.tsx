"use client";
import React from "react";
import styled from "styled-components";

import Column from "@/app/components/Column";
import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import InputForm from "../components/InputForm";
import CheckBoxForm from "../components/CheckBoxForm";
import DetailServiceForm from "./components/DetailServiceForm";
import CustomButton from "@/app/components/CustomButton";

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
            />
            <InputForm
              title="담당자 성명"
              isRequired={true}
              placeholder="담당자 성명을 입력해주세요."
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
            />
            <InputForm
              title="휴대폰 번호"
              isRequired={true}
              placeholder="휴대폰 번호를 ‘-’없이 입력해주세요."
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
              placeholder="안내 메일 받으실 이메일 주소를 입력해주세요."
            />
            <InputForm
              title="비밀번호"
              isRequired={true}
              placeholder="비밀글로 고객님이 확인할 때 사용할 비밀번호를 입력해주세요."
            />
          </Row>
        </Column>
        <DetailServiceForm />
        <Column>
          <CustomButton
            text="견적문의하기"
            onClick={() => {}}
            style={{ padding: "21px 0", width: "520px" }}
          />
        </Column>
      </Column>
    </Container>
  );
};

export default EstimateCreatePage;
