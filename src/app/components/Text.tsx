"use client";
import styled from "styled-components";

const TextItem = styled.div`
  color: #2a4b6d;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.6px;
  cursor: pointer;
`;

interface TextIProps {
  color?: string;
  size?: string;
  weight?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
}

const Text: React.FC<TextIProps> = (props) => {
  const { color, size, weight, style, children, onClick } = props;

  return (
    <TextItem
      style={{
        color: color && color,
        fontSize: size && size,
        fontWeight: weight && weight,
        ...style,
      }}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </TextItem>
  );
};

export default Text;
