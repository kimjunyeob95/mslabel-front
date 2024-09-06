"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface ColumnIProps {
  gap?: string;
  align?: string;
  justifyContent?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const Column: React.FC<ColumnIProps> = (props) => {
  const { gap, align, justifyContent, style, children, onClick } = props;

  return (
    <Container
      style={{
        gap: gap && gap,
        alignItems: align && align,
        justifyContent: justifyContent && justifyContent,
        ...style,
      }}
      onClick={() => onClick && onClick()}
    >
      {children}
    </Container>
  );
};

export default Column;
