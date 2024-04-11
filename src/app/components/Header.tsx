"use client";
import React, { useState } from "react";
import styled from "styled-components";

import Image from "next/image";
import { MAIN_LOGO } from "../assets/svg";
import { HeaderContents, HEADER_CONTENT } from "../models/HeaderContents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1372px;
  height: 106px;
`;

const HeaderContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const ContentsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  color: #414141;
  :hover {
    color: #3870aa;
  }
  cursor: pointer;
`;

const ContentItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 16px;
  position: absolute;
  top: 40px;

  width: 112px;
  box-shadow: 0px 35px 60px -15px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 20px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;

export const Header = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null);

  return (
    <Container>
      <Image src={MAIN_LOGO} alt="main logo" />
      <HeaderContentContainer>
        {HEADER_CONTENT.map((item: HeaderContents, idx: number) => {
          return (
            <ContentsItemContainer
              key={idx}
              onMouseOver={() => setIsActiveIndex(idx)}
              onMouseLeave={() => setIsActiveIndex(null)}
            >
              {item.title}
              {isActiveIndex === idx && (
                <ContentItems>
                  {item.items.map((contentsItem, contentsIdx) => {
                    return (
                      <Text key={contentsIdx}>{contentsItem.content}</Text>
                    );
                  })}
                </ContentItems>
              )}
            </ContentsItemContainer>
          );
        })}
      </HeaderContentContainer>
    </Container>
  );
};
