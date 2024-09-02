import React from "react";
import styled from "styled-components";

import Column from "@/app/components/Column";
import Text from "@/app/components/Text";

const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 23px 36px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--Line-Line-1_gray, #d9d9d9);

  color: var(--Text-Sub2, #868686);

  /* Content txt */
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  ::placeholder {
    color: #868686;
  }
`;

interface InputFormIProps {
  title: string;
  placeholder: string;
  isRequired: boolean;
}

const InputForm: React.FC<InputFormIProps> = (props) => {
  const { title, placeholder, isRequired } = props;

  return (
    <Column gap="8px" align="flex-start">
      <Text
        color="#000"
        size="20px"
        weight={700}
        style={{ lineHeight: "38px" }}
      >
        {title}
        {isRequired && <span style={{ color: "#f00" }}>*</span>}
      </Text>
      <Input placeholder={placeholder} />
    </Column>
  );
};

export default InputForm;
