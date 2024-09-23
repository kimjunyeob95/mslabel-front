import ItemCard from "@/app/components/ItemCard";
import { BasicLabelListType } from "@/app/util/LabelType";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 140px 102px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  background-color: #ececec;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 36px;
`;

const Title = styled.div`
  color: #000;
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
`;

const Description = styled.div`
  color: #414141;
  text-align: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

const GridContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 44px;
  padding: 20px;

  gap: 44px;
  width: 100%;
  max-width: 1288px;
`;

const GridItem = styled.div`
  max-width: 400px;
`;

interface BasicLabelDetailContainerIProps {
  basicLabelList: BasicLabelListType;

  title: string;
  description: string;
}

const BasicLabelDetailContainer: React.FC<BasicLabelDetailContainerIProps> = (
  props
) => {
  const { basicLabelList, title, description } = props;

  return (
    <Container>
      <Column>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Column>
      <GridContainer>
        {basicLabelList &&
          basicLabelList.records.map((item, idx) => {
            return (
              <GridItem key={idx}>
                <ItemCard
                  thumbnail={item.main_img}
                  title={item.title}
                  description={item.desc}
                  id={item.id}
                />
              </GridItem>
            );
          })}
      </GridContainer>
    </Container>
  );
};

export default BasicLabelDetailContainer;
