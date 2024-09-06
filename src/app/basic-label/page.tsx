"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InquiryContainer from "../(main)/InquiryContainer";
import { IMAGE_NOTIFICATION_THUMBNAIL } from "../assets/image";
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

export const MOCK_DATA: {
  thumbnail: any;
  title: string;
  description: string;
}[] = [
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
  {
    thumbnail: IMAGE_NOTIFICATION_THUMBNAIL,
    title: "화장품",
    description: `뛰어난 해상도와 정교한 색상으로 퀄리티 높은 라벨입니다. 
			다양한 그래픽과 효과가 많은 라벨에 추천합니다.`,
  },
];

const BasicLabelPage = () => {
  const [isActivieRef, setIsActiveRef] = useState<string>("업종");
  const firstTabRef = useRef<HTMLDivElement>(null);
  const secondTabRef = useRef<HTMLDivElement>(null);
  const thirdTabRef = useRef<HTMLDivElement>(null);
  const fourthTabRef = useRef<HTMLDivElement>(null);
  const fifthTabRef = useRef<HTMLDivElement>(null);

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
      setIsActiveRef("업종");
    } else if (
      secondTabRef.current &&
      thirdTabRef.current &&
      scrollPosition >= secondTabRef.current.offsetTop &&
      scrollPosition < thirdTabRef.current.offsetTop
    ) {
      setIsActiveRef("특수");
    } else if (
      thirdTabRef.current &&
      fourthTabRef.current &&
      scrollPosition >= thirdTabRef.current.offsetTop &&
      scrollPosition < fourthTabRef.current.offsetTop
    ) {
      setIsActiveRef("전문");
    } else if (
      fourthTabRef.current &&
      fifthTabRef.current &&
      scrollPosition >= fourthTabRef.current.offsetTop &&
      scrollPosition < fifthTabRef.current.offsetTop
    ) {
      setIsActiveRef("단순");
    } else if (
      fifthTabRef.current &&
      scrollPosition >= fifthTabRef.current.offsetTop &&
      scrollPosition < fifthTabRef.current.offsetTop + 800
    ) {
      setIsActiveRef("형태");
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
          $isActivie={isActivieRef === "업종"}
          onClick={() => {
            handleOnScrollToRef(firstTabRef, "업종");
          }}
        >
          업종
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "특수"}
          onClick={() => {
            handleOnScrollToRef(secondTabRef, "특수");
          }}
        >
          특수
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "전문"}
          onClick={() => {
            handleOnScrollToRef(thirdTabRef, "전문");
          }}
        >
          전문
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "단순"}
          onClick={() => {
            handleOnScrollToRef(fourthTabRef, "단순");
          }}
        >
          단순
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "형태"}
          onClick={() => {
            handleOnScrollToRef(fifthTabRef, "형태");
          }}
        >
          형태
        </RefItem>
      </RefContainer>
      <div ref={firstTabRef} />
      <ItemSlider
        title="업종별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label/1"
      />
      <div ref={secondTabRef} />
      <ItemSlider
        title="특수 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label/2"
      />
      <div ref={thirdTabRef} />
      <ItemSlider
        title="전문 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label/3"
      />
      <div ref={fourthTabRef} />
      <ItemSlider
        title="단순 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label"
      />
      <div ref={fifthTabRef} />
      <ItemSlider
        title="원단별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label/4"
      />
      <InquiryContainer />
    </Container>
  );
};

export default BasicLabelPage;
