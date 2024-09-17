import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import React from "react";
import styled from "styled-components";

const CheckBox = styled.input`
  width: 30px;
  height: 30px;

  border-radius: 16px;
  border: 1px solid #d9d9d9;
`;

interface CheckBoxFormIProps {
  text: string;
  id?: string;
  isChecked: boolean;
  onClick?: (id: string) => void;
}

const CheckBoxForm: React.FC<CheckBoxFormIProps> = (props) => {
  const { text, id, isChecked, onClick } = props;

  return (
    <Row gap="16px">
      <CheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          onClick && onClick(id!);
        }}
      />
      <Text color="#414141" size="16px" weight={400}>
        {text}
      </Text>
    </Row>
  );
};

export default CheckBoxForm;
