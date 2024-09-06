import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const CardItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #000;

  font-family: "Spoqa Han Sans Neo";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;

const Description = styled.span`
  color: #414141;

  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

interface DescriptionCareIProps {
  image: string;
  title: string;
  description: string;
  secondDescription: string;
}

const DescriptionCard: React.FC<DescriptionCareIProps> = (props) => {
  const { image, title, description, secondDescription } = props;

  return (
    <Container>
      <Image src={image} alt="icon" />
      <CardItems>
        <Title>{title}</Title>
        <Description>
          {description}
          <br />
          {secondDescription}
        </Description>
      </CardItems>
    </Container>
  );
};

export default DescriptionCard;
