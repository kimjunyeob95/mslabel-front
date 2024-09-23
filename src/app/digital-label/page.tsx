"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InquiryContainer from "../(main)/InquiryContainer";
import { MOCK_DATA } from "../basic-label/page";
import ItemSlider from "../components/ItemSlider";
import Column from "../components/Column";
import Text from "../components/Text";
import {
  IMAGE_DIGITAL_COSMETIC_THUMBNAIL,
  IMAGE_DIGITAL_FOOD_THUMBNAIL,
  IMAGE_DIGITAL_TUBE_THUMBNAIL,
  IMAGE_DIGITAL_PIECE_THUMBNAIL,
  IMAGE_DIGITAL_DIY_THUMBNAIL,
  IMAGE_DIGITAL_CIRCLE_THUMBNAIL,
} from "../assets/image";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 320px;
  background: var(--Background-Skyblue, #eff5ff);
`;

const PURPOSE_MOCK_DATA = [
  {
    thumbnail: IMAGE_DIGITAL_COSMETIC_THUMBNAIL,
    title: "화장품",
    description: `유연성과 투명도를 가진 라벨이 주로 사용됩니다. 특히 유포지나 무광라미를 사용하며, 엠보싱 등 특수 인쇄로도 제작합니다.`,
  },
  {
    thumbnail: IMAGE_DIGITAL_TUBE_THUMBNAIL,
    title: "식품 / 유통",
    description: `신선도와 안전성을 유지하며, 내구성과 내습성을 갖추기 위해 감열지, 아트지를 많이 사용합니다.`,
  },
  {
    thumbnail: IMAGE_DIGITAL_FOOD_THUMBNAIL,
    title: "튜브",
    description: `튜브 형태의 제품에 적용될 수 있도록 라벨이 유연하게 제작되어 곡선이나 구부러진 표면에 잘 부착됩니다.`,
  },
];

const FORM_MOCK_DATA = [
  {
    thumbnail: IMAGE_DIGITAL_PIECE_THUMBNAIL,
    title: "낱장",
    description: `직접 만든 이미지 크기와 디자인에 맞춰 라벨이 제작되어,  소규모 생산과 특별 이벤트 상품, 프로모션 등에 사용 됩니다.`,
  },
  {
    thumbnail: IMAGE_DIGITAL_DIY_THUMBNAIL,
    title: "DIY",
    description: `원하는 디자인과 형태로 제작하여 모양대로 잘라주는 라벨로 차별화된 제품을 만들는 데 최적화된 맞춤형 라벨입니다. `,
  },
  {
    thumbnail: IMAGE_DIGITAL_CIRCLE_THUMBNAIL,
    title: "원형",
    description: `가장 많이 사용하는 기본 틀로 깔끔하고 세련된 라벨로 다양한 용도로 활용됩니다.`,
  },
];

const DigitalLabelPage = () => {
  const [isActivieRef, setIsActiveRef] = useState<string>("용도별 라벨");
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
      setIsActiveRef("용도별 라벨");
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
      <ImageContainer>
        <Column gap="24px">
          <Text color="#2a486d" size="32px" weight={700}>
            디지털 인쇄
          </Text>
          <Text
            color="#414141"
            size="20px"
            style={{ lineHeight: "32px", textAlign: "center" }}
          >
            디지털 인쇄 기기로 제작하는 라벨입니다.
            <br />
            다양한 색상과 풍부한 그래픽, 많은 효과를 지원하여, 인쇄 품질을 한층
            더 높일 수 있습니다.
          </Text>
        </Column>
      </ImageContainer>
      <RefContainer>
        <RefItem
          $isActivie={isActivieRef === "용도별 라벨"}
          onClick={() => {
            handleOnScrollToRef(firstTabRef, "용도별 라벨");
          }}
        >
          용도별 라벨
        </RefItem>
        <RefItem
          $isActivie={isActivieRef === "형태"}
          onClick={() => {
            handleOnScrollToRef(secondTabRef, "형태");
          }}
        >
          형태별 라벨
        </RefItem>
        {/* <RefItem
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
        </RefItem> */}
      </RefContainer>
      <div ref={firstTabRef} />
      <ItemSlider
        title="용도별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={PURPOSE_MOCK_DATA}
        link="digital-label/16?group_id=4&sub_id=16"
      />
      <div ref={secondTabRef} />
      <ItemSlider
        title="형태별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={FORM_MOCK_DATA}
        link="digital-label/17?group_id=4&sub_id=17"
      />
      <div ref={thirdTabRef} />
      {/* <ItemSlider
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
      /> */}
      <InquiryContainer />
    </Container>
  );
};

export default DigitalLabelPage;
