import React, { useState } from "react";
import styled from "styled-components";
import { EstimateListType } from "../hooks/types/EstimateType";
import dayjs from "dayjs";
import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import CustomButton from "@/app/components/CustomButton";
import { useRouter } from "next/navigation";

const EstimateGrid = styled.div`
  display: grid;
  grid-template-columns: 60.7% 10.5% 14.4% 14.4%; /* 비율 적용 */
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1278px;
`;

const EstimateTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  background: #f3f3f3;

  color: #000;
  text-align: center;

  /* Sub title */
  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 190% */
`;

const EstimateContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;

  border-bottom: 0.5px solid #dadada;
  background: #fff;
  color: var(--Text-Main, #414141);

  /* Content txt */
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  cursor: pointer;
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

interface EstimateListIProps {
  estimateList: EstimateListType;
}

const EstimateList: React.FC<EstimateListIProps> = (props) => {
  const { estimateList } = props;
  const router = useRouter();

  const [isOpenPasswordAcceptModal, setIsOpenPasswordAcceptModal] =
    useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAcceptPassword = () => {
    if (password === validPassword) {
      alert("성공");
    } else {
      alert("비밀번호가 틀립니다.");
    }
  };

  return (
    <React.Fragment>
      <EstimateGrid>
        <EstimateTitle>제목</EstimateTitle>
        <EstimateTitle>의뢰인</EstimateTitle>
        <EstimateTitle>의뢰인</EstimateTitle>
        <EstimateTitle>진행사항</EstimateTitle>
        {estimateList.records?.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <EstimateContents
                style={{ justifyContent: "flex-start" }}
                onClick={() => {
                  router.push(`/estimate-detail/${item.id}`);
                  // setIsOpenPasswordAcceptModal(true);
                  // setPassword(item.password);
                }}
              >
                {item.title}
              </EstimateContents>
              <EstimateContents>
                {item.contact_name.replace(/^(.)(.)(.*)$/, "$1*$3")}
              </EstimateContents>
              <EstimateContents>
                {dayjs(item.created_at).format("YYYY.MM.DD")}
              </EstimateContents>
              <EstimateContents>
                {item.is_reply === "N" ? "답변 준비중" : "답변 완료"}
              </EstimateContents>
            </React.Fragment>
          );
        })}
      </EstimateGrid>
      {isOpenPasswordAcceptModal && (
        <Modal onClick={() => setIsOpenPasswordAcceptModal(false)}>
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
      )}
    </React.Fragment>
  );
};

export default EstimateList;
