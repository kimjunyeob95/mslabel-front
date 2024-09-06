import React, { useRef } from "react";
import styled from "styled-components";

import Column from "@/app/components/Column";
import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import CheckBoxForm from "../../components/CheckBoxForm";
import InputForm from "../../components/InputForm";

const TextArea = styled.textarea`
  display: flex;
  padding: 23px 36px;
  width: 100%;
  height: 150px;
  border-radius: 16px;
  border: 1px solid var(--Line-Line-1_gray, #d9d9d9);

  color: var(--Text-Sub2, #868686);
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ImageUploadInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 66px 36px;
  width: 100%;

  border-radius: 16px;
  border: 1px solid var(--Line-Gray, #d9d9d9);
  background: var(--Line-Gray, #d9d9d9);

  color: var(--Text-Sub2, #868686);
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 225% */
  cursor: pointer;
`;

const DetailServiceForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <React.Fragment>
      <Text color="#000" size="32px" weight={700}>
        상세 서비스
      </Text>
      <Column gap="36px" align="flex-start">
        <Column gap="8px" align="flex-start">
          <Text color="#000" size="20px" weight={700}>
            카테고리 <span style={{ color: "#f00" }}> * </span>
            <span style={{ fontSize: "16px", fontWeight: 400 }}>
              (중복선택 가능)
            </span>
          </Text>
          <Row gap="70px">
            <CheckBoxForm text="라벨 인쇄" isChecked={true} />
            <CheckBoxForm text="디지털 인쇄" isChecked={true} />
            <CheckBoxForm text="기타 인쇄" isChecked={true} />
            <CheckBoxForm text="상담 후 결정" isChecked={true} />
          </Row>
        </Column>
        <Row
          gap="56px"
          style={{
            width: "100%",
          }}
        >
          <InputForm
            title="제품 규격"
            isRequired={true}
            placeholder="예시) 100mm x 100mm x 100mm"
          />
          <InputForm
            title="제품 용도"
            isRequired={true}
            placeholder="예시) 화장품 부착 라벨"
          />
        </Row>
        <Row gap="32px" justifyContent="flex-start">
          <InputForm
            title="원단 및 코팅 여부"
            isRequired={false}
            placeholder="유포지"
            style={{ width: "616px" }}
          />
          <Column gap="40px" style={{ width: "auto" }}>
            <div />
            <CheckBoxForm text="상담 후 결정" isChecked={true} />
          </Column>
        </Row>
        <Row gap="32px">
          <InputForm
            title="가공 형태"
            isRequired={true}
            placeholder="롤"
            style={{ width: "616px" }}
          />
          <Column gap="40px" style={{ width: "auto" }}>
            <div />
            <CheckBoxForm text="상담 후 결정" isChecked={true} />
          </Column>
        </Row>
        <Row gap="32px">
          <InputForm
            title="수량"
            isRequired={true}
            placeholder="예시) 10만, 1000m"
            style={{ width: "616px" }}
          />
          <Column gap="40px" style={{ width: "auto" }}>
            <div />
            <CheckBoxForm text="상담 후 결정" isChecked={true} />
          </Column>
        </Row>
        <Column gap="8px" align="flex-start">
          <Text color="#000" size="20px" weight={700}>
            기타 문의사항
          </Text>
          <Column gap="16px">
            <TextArea
              placeholder={`문의사항을 자세히 알려주시면 정확한 견적에 도움이 됩니다. (최대 1,000자)
예시) 식품 라벨인데 뜨거운 용기에 사용하기 때문에 온도가 중요합니다.
이럴땐 어떤 라벨 원단으로 진행해야하나요?`}
            />
            <ImageUploadInput onClick={handleImageUploadClick}>
              파일을 클릭해서 첨부해주세요.
              <input
                ref={fileInputRef}
                name="file"
                type="file"
                accept=".jpg, .png"
                style={{
                  display: "none",
                  position: "absolute",
                  width: "100%",
                  height: "150px",
                  border: "1px solid red",
                }}
                // onChange={(event) => handleUploadImageFile(event)}
              />
            </ImageUploadInput>
          </Column>
          <Text color="#868686" size="14px" weight={400}>
            * 파일은 총 10MB까지 업로드 가능합니다. 그외 대용량 파일은
            접수내용과 함께{" "}
            <span style={{ textDecoration: "underline", fontWeight: 700 }}>
              pyh1707@daum.net
            </span>
            로 보내주세요.
          </Text>
        </Column>
      </Column>
    </React.Fragment>
  );
};

export default DetailServiceForm;
