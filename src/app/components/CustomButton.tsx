"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  background: var(--Accent-Blue_logo, #3870aa);

  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.5px; /* 209.375% */
`;

interface CustomButtonIProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonIProps> = (props) => {
  const { text, onClick, style } = props;

  return (
    <Container onClick={onClick} style={{ ...style }}>
      {text}
    </Container>
  );
};

export default CustomButton;
