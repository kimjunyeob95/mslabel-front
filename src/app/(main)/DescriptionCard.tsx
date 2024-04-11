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
  font-size: 22px;
  font-weight: 700;
  color: #000;
`;

const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #383838;
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
