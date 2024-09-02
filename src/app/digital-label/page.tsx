"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InquiryContainer from "../(main)/InquiryContainer";
import { MOCK_DATA } from "../basic-label/page";
import ItemSlider from "../components/ItemSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RefContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: sticky;
  top: 106px;

  height: 60px;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 10;
`;

const RefItem = styled.div<{ $isActivie: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 60px;

  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.607px;

  border-bottom: ${(props) => props.$isActivie && "2px solid #3870aa"};
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 140px 102px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: #ececec;
`;

const DigitalLabelPage = () => {
  const [isActivieRef, setIsActiveRef] = useState<string>("용도");
  const firstTabRef = useRef<HTMLDivElement>(null);
  const secondTabRef = useRef<HTMLDivElement>(null);
  const thirdTabRef = useRef<HTMLDivElement>(null);
  const fourthTabRef = useRef<HTMLDivElement>(null);

  const handleOnScrollToRef = (ref: any, tabName: string) => {
    window.scrollTo({
      top: ref.current.offsetTop - 150,
      behavior: "auto",
    });

    setIsActiveRef(tabName);
  };

  const handleOnScroll = () => {
    const scrollPosition = window.scrollY + 150;

    if (
      firstTabRef.current &&
      secondTabRef.current &&
      scrollPosition >= firstTabRef.current.offsetTop &&
      scrollPosition < secondTabRef.current.offsetTop
    ) {
      setIsActiveRef("용도");
    } else if (
      secondTabRef.current &&
      thirdTabRef.current &&
      scrollPosition >= secondTabRef.current.offsetTop &&
      scrollPosition < thirdTabRef.current.offsetTop
    ) {
      setIsActiveRef("형태");
    } else if (
      thirdTabRef.current &&
      fourthTabRef.current &&
      scrollPosition >= thirdTabRef.current.offsetTop &&
      scrollPosition < fourthTabRef.current.offsetTop
    ) {
      setIsActiveRef("원단");
    } else if (
      fourthTabRef.current &&
      scrollPosition >= fourthTabRef.current.offsetTop &&
      scrollPosition < fourthTabRef.current.offsetTop + 800
    ) {
      setIsActiveRef("파우치");
    } else {
      setIsActiveRef("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);

  return (
    <Container>
      <ImageContainer />
      <RefContainer>
        <RefItem
          $isActivie={isActivieRef === "용도"}
          onClick={() => {
            handleOnScrollToRef(firstTabRef, "용도");
          }}
        >
          용도
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "형태"}
          onClick={() => {
            handleOnScrollToRef(secondTabRef, "형태");
          }}
        >
          형태
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "원단"}
          onClick={() => {
            handleOnScrollToRef(thirdTabRef, "원단");
          }}
        >
          원단
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "파우치"}
          onClick={() => {
            handleOnScrollToRef(fourthTabRef, "파우치");
          }}
        >
          파우치
        </RefItem>
      </RefContainer>
      <div ref={firstTabRef} />
      <ItemSlider
        title="용도별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="digital-label/1"
      />
      <div ref={secondTabRef} />
      <ItemSlider
        title="형태별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="digital-label/2"
      />
      <div ref={thirdTabRef} />
      <ItemSlider
        title="원단별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="digital-label/3"
      />
      <div ref={fourthTabRef} />
      <ItemSlider
        title="파우치 인쇄입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="digital-label"
      />
      <InquiryContainer />
    </Container>
  );
};

export default DigitalLabelPage;
