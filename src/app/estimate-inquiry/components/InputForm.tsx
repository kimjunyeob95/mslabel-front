import React, { useState } from "react";
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
  value: any;
  target: string;
  onChange: (key: string, value: any) => void;
  style?: React.CSSProperties;
  type?: string;
}

const InputForm: React.FC<InputFormIProps> = (props) => {
  const {
    title,
    placeholder,
    isRequired,
    value,
    target,
    onChange,
    style,
    type,
  } = props;

  const [inputValue, setInputValue] = useState<string>(value);

  const handleOnchangeValue = (e: any) => {
    setInputValue(e.target.value);

    onChange(target, e.target.value);
  };

  return (
    <Column gap="8px" align="flex-start" style={{ ...style }}>
      <Text
        color="#000"
        size="20px"
        weight={700}
        style={{ lineHeight: "38px" }}
      >
        {title}
        {isRequired && <span style={{ color: "#f00" }}>*</span>}
      </Text>
      <Input
        type={target === "password" ? "password" : "text"}
        placeholder={placeholder}
        style={{ ...style }}
        value={inputValue}
        onChange={handleOnchangeValue}
        readOnly={type === "readOnly" ? true : false}
      />
    </Column>
  );
};

export default InputForm;
