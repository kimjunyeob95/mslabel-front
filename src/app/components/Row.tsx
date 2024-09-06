"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface RowIProps {
  gap?: string;
  align?: string;
  justifyContent?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const Row: React.FC<RowIProps> = (props) => {
  const { gap, align, justifyContent, style, children, onClick } = props;

  return (
    <Container
      onClick={() => {
        onClick && onClick();
      }}
      style={{
        gap: gap && gap,
        alignItems: align && align,
        justifyContent: justifyContent && justifyContent,
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

export default Row;
