"use client";
import React from "react";
import styled from "styled-components";

import { useEstimateDetailHooks } from "../hooks/useEstimateDetailHooks";
import Column from "@/app/components/Column";
import Text from "@/app/components/Text";
import CustomButton from "@/app/components/CustomButton";
import InputForm from "@/app/estimate-inquiry/components/InputForm";
import Row from "@/app/components/Row";
import DetailServiceForm from "@/app/estimate-inquiry/[create]/components/DetailServiceForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
  padding: 80px 0;
  margin: 0 auto;

  width: 100%;
  max-width: 1278px;
`;

const ReplyForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 23px 36px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--Line-Line-1_gray, #d9d9d9);
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
`;

const PasswordInput = styled.input`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: 300px;
  border: 1px solid #868686;
  border-radius: 8px;
`;

const EstimateDeatilPage = () => {
  const {
    boardDetailItem,
    password,
    validPassword,
    isAcceptSuccess,
    estimateParams,
    setIsAcceptSuccess,
    setValidPassword,
  } = useEstimateDetailHooks();

  const handleAcceptPassword = () => {
    if (password === validPassword || validPassword === "mslabeladmin") {
      setIsAcceptSuccess(true);
    } else {
      alert("비밀번호가 틀립니다.");
    }
  };

  if (!isAcceptSuccess) {
    return (
      <Modal>
        <ModalContainer>
          <Text>비밀번호를 입력해주세요.</Text>
          <PasswordInput
            type="password"
            value={validPassword}
            onChange={(e) => setValidPassword(e.target.value)}
          />
          <CustomButton text="확인" onClick={handleAcceptPassword} />
        </ModalContainer>
      </Modal>
    );
  }

  return (
    <Container>
      <Column gap="24px">
        <Text color="#2a4b6d" size="32px">
          견적문의 답변
        </Text>
        <Text size="20px" color="#414141" weight={400}>
          명성라벨은 최고의 인쇄 기술과 차별화된 상품으로 고객의 만족을
          최우선으로 생각합니다.
        </Text>
      </Column>
      <Column gap="20px" align="flex-start">
        <Text color="#000" size="32px" weight={700}>
          답변
        </Text>
        <ReplyForm>
          {boardDetailItem?.replies && boardDetailItem.replies[0].desc}
        </ReplyForm>
      </Column>
      <Column
        gap="24px"
        style={{ paddingTop: "80px", width: "100%" }}
        align="flex-start"
      >
        <Text size="32px" weight={700}>
          견적문의 내역
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
              onChange={() => {}}
              type="readOnly"
            />
            <InputForm
              title="담당자 성명"
              isRequired={true}
              placeholder="담당자 성명을 입력해주세요."
              value={estimateParams.contact_name}
              target="contact_name"
              onChange={() => {}}
              type="readOnly"
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
              onChange={() => {}}
              type="readOnly"
            />
            <InputForm
              title="휴대폰 번호"
              isRequired={true}
              placeholder="휴대폰 번호를 ‘-’없이 입력해주세요."
              value={estimateParams.contact_phone}
              target="contact_phone"
              onChange={() => {}}
              type="readOnly"
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
              onChange={() => {}}
              type="readOnly"
            />
            <InputForm
              title="비밀번호"
              isRequired={true}
              placeholder="비밀글로 고객님이 확인할 때 사용할 비밀번호를 입력해주세요."
              value={estimateParams.password}
              target="password"
              onChange={() => {}}
              type="readOnly"
            />
          </Row>
        </Column>
        <DetailServiceForm
          estimateParams={estimateParams}
          handleSetEstimateParams={() => {}}
          type="readOnly"
        />
      </Column>
    </Container>
  );
};

export default EstimateDeatilPage;
