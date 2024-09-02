import Row from "@/app/components/Row";
import Text from "@/app/components/Text";
import React from "react";
import styled from "styled-components";

const CheckBox = styled.input`
  width: 36px;
  height: 36px;

  border-radius: 16px;
  border: 1px solid #d9d9d9;
`;

interface CheckBoxFormIProps {
  text: string;
  isChecked: boolean;
}

const CheckBoxForm: React.FC<CheckBoxFormIProps> = (props) => {
  const { text, isChecked } = props;

  return (
    <Row gap="16px">
      <CheckBox type="checkbox" checked={isChecked} />
      <Text color="#414141" size="16px" weight={400}>
        {text}
      </Text>
    </Row>
  );
};

export default CheckBoxForm;
