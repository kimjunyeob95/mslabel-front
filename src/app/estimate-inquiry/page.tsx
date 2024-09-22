"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import Row from "../components/Row";
import Text from "../components/Text";
import Column from "../components/Column";
import EstimateList from "./components/EstimateList";
import NoticeList from "./components/NoticeList";
import CustomButton from "../components/CustomButton";
import { useEstimateListHooks } from "./hooks/useEstimateListHooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 80px;
  width: 100%;
`;

const RefContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: sticky;
  top: 106px;
  height: 60px;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 10;
`;

const RefItem = styled.div<{ $isActivie: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 60px;

  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.607px;

  border-bottom: ${(props) => props.$isActivie && "2px solid #3870aa"};
  cursor: pointer;
`;

const EstimateInquiryPage = () => {
  const router = useRouter();

  const { estimateList } = useEstimateListHooks();
  const [isActivieRef, setIsActiveRef] = useState<string>("견적문의");

  const handleSetIsActiveRef = (activeRef: string) => {
    setIsActiveRef(activeRef);
  };

  return (
    <Container>
      <Column gap="24px" style={{ paddingTop: "80px", width: "100%" }}>
        <Text size="32px" weight={700}>
          견적문의
        </Text>
        <Text color="#868686" size="20px" weight={700}>
          라벨의 시작과 끝, 고객의 오랜 고민을 덜 수 있도록 좋은 퀄리티로
          보답하겠습니다.
        </Text>
      </Column>
      <RefContainer>
        <RefItem
          $isActivie={isActivieRef === "견적문의"}
          onClick={() => {
            handleSetIsActiveRef("견적문의");
          }}
        >
          견적문의
        </RefItem>
        {/* <RefItem
          $isActivie={isActivieRef === "공지사항"}
          onClick={() => {
            handleSetIsActiveRef("공지사항");
          }}
        >
          공지사항
        </RefItem> */}
      </RefContainer>
      <Row
        justifyContent="flex-end"
        style={{ width: "100%", maxWidth: "1278px", margin: "0 auto" }}
      >
        <CustomButton
          text="견적문의하기"
          onClick={() => {
            router.push("/estimate-inquiry/create");
          }}
          style={{ width: "160px" }}
        />
      </Row>
      {isActivieRef === "견적문의" ? (
        <React.Fragment>
          {estimateList && <EstimateList estimateList={estimateList} />}
        </React.Fragment>
      ) : (
        <NoticeList />
      )}
    </Container>
  );
};

export default EstimateInquiryPage;
