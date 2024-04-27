"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import { MAIN_LOGO } from "../assets/svg";
import { HeaderContents, HEADER_CONTENT } from "../models/HeaderContents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1278px;
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
  color: #414141;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.333px;
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
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 13.3px 0px rgba(56, 112, 170, 0.3);
`;

const Text = styled.div`
  color: #383838;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.333px;
`;

export const Header = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null);

  return (
    <Container>
      <Link href="/">
        <Image src={MAIN_LOGO} alt="main logo" />
      </Link>
      <HeaderContentContainer>
        {HEADER_CONTENT.map((item: HeaderContents, idx: number) => {
          return (
            <ContentsItemContainer
              key={idx}
              onMouseOver={() => setIsActiveIndex(idx)}
            >
              <Link
                href={item.route}
                style={{
                  color: `${
                    location.pathname.includes(item.route)
                      ? "#3870AA"
                      : "#414141"
                  }`,
                }}
              >
                {item.title}
              </Link>
              {isActiveIndex === idx && (
                <ContentItems onMouseLeave={() => setIsActiveIndex(null)}>
                  {item.items.map((contentsItem, contentsIdx) => {
                    return (
                      <Link href={contentsItem.link} key={contentsIdx}>
                        <Text>{contentsItem.content}</Text>
                      </Link>
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
