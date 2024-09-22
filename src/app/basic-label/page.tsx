"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { parse } from "query-string-for-all";

import InquiryContainer from "../(main)/InquiryContainer";
import {
  IMAGE_COSMETIC_THUMBNAIL,
  IMAGE_HEALTH_THUMBNAIL,
  IMAGE_FOOD_THUMBNAIL,
  IMAGE_AROUND_THUMBNAIL,
  IMAGE_TRANSPARENT_THUMBNAIL,
  IMAGE_GENUINE_THUMBNAIL,
} from "../assets/image";
import ItemSlider from "../components/ItemSlider";
import { useSubMenuListHooks } from "../components/hooks/useSubMenuListHooks";
import { usePathname } from "next/navigation";
import Text from "../components/Text";
import Column from "../components/Column";

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

export const MOCK_DATA: {
  thumbnail: any;
  title: string;
  description: string;
}[] = [
  {
    thumbnail: IMAGE_COSMETIC_THUMBNAIL,
    title: "화장품",
    description: `제품의 고급스러움과 브랜드 이미지를 강화하기 위해 다양한 색상과 질감의 재질이 사용되며, 유연성과 투명도를 가진 라벨이 주로 사용됩니다. 엠보싱 등 특수 인쇄 기법이 활용됩니다.`,
  },
  {
    thumbnail: IMAGE_HEALTH_THUMBNAIL,
    title: "제약 / 건강식품",
    description: `쉽게 훼손되지 않도록 내구성과 내화학성이 뛰어난 재질이 사용됩니다. 복잡한 정보를 효과적으로 전달하기 위해 이중 라벨이 사용되기도 하며, 가독성을 높인 디자인이 중요합니다. `,
  },
  {
    thumbnail: IMAGE_FOOD_THUMBNAIL,
    title: "식품 / 유통",
    description: `신선도와 안전성을 유지하며, 다양한 환경에서 명확한 정보 제공을 위해 내구성과 내습성을 갖추면서 시각적으로 매력적인 디자인을 통해 소비자의 관심을 끕니다.`,
  },
];

const SPECIAL_MOCK_DATA = [
  {
    thumbnail: IMAGE_AROUND_THUMBNAIL,
    title: "부분접착",
    description: `라벨의 일부에만 접착제를 사용하여, 쉽게 제거하거나 다시 부착할 수 있으며, 자주 떼었다 붙이는 용도에 적합합니다.`,
  },
  {
    thumbnail: IMAGE_GENUINE_THUMBNAIL,
    title: "정품인증",
    description: `제품의 진품 여부를 확인할 수 있도록 특수한 인쇄 기술이나 홀로그램 등을 사용하여 위조를 방지하며, 소비자에게 신뢰를 줍니다.`,
  },
  {
    thumbnail: IMAGE_TRANSPARENT_THUMBNAIL,
    title: "투명라벨",
    description: `라벨이 제품과 자연스럽게 어우러지도록 투명한 재질로 제작되어, 내용물을 강조하거나 제품의 고유 디자인을 유지하는 데 효과적입니다.`,
  },
];

const BasicLabelPage = () => {
  const [isActivieRef, setIsActiveRef] = useState<string>("업종별 라벨");
  const { basicLabelSubMenuList, getSubBasicLabelList } = useSubMenuListHooks();

  const { group_id } = parse(window.location.search);

  const firstTabRef = useRef<HTMLDivElement>(null);
  const secondTabRef = useRef<HTMLDivElement>(null);
  const thirdTabRef = useRef<HTMLDivElement>(null);
  const fourthTabRef = useRef<HTMLDivElement>(null);
  const fifthTabRef = useRef<HTMLDivElement>(null);

  const handleOnScrollToRef = (ref: any, tabName: string) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
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
      setIsActiveRef("업종별 라벨");
    } else if (
      secondTabRef.current &&
      thirdTabRef.current &&
      scrollPosition >= secondTabRef.current.offsetTop &&
      scrollPosition < thirdTabRef.current.offsetTop
    ) {
      setIsActiveRef("특수 라벨");
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

  useEffect(() => {
    if (group_id) {
      getSubBasicLabelList(Number(group_id));
    }
  }, [group_id]);

  return (
    <Container>
      <ImageContainer>
        <Column gap="24px">
          <Text color="#2a486d" size="32px" weight={700}>
            일반 라벨
          </Text>
          <Text
            color="#414141"
            size="20px"
            style={{ lineHeight: "32px", textAlign: "center" }}
          >
            프레스(1,2도)와 로타리(3도 이상) 기기로 제작하는 라벨입니다.
            <br />
            다품종 대량생산을 통해 비용 효율성을 극대화하며, 고객의 브랜드
            가치를 높이는 효과적인 라벨 솔루션입니다.
          </Text>
        </Column>
      </ImageContainer>
      <RefContainer>
        {basicLabelSubMenuList?.result.map((item, idx) => {
          return (
            <RefItem
              key={idx}
              $isActivie={isActivieRef === item.sub_title}
              onClick={() => {
                handleOnScrollToRef(
                  item.sub_title === "업종별 라벨" ? firstTabRef : secondTabRef,
                  item.sub_title
                );
              }}
            >
              {item.sub_title}
            </RefItem>
          );
        })}
      </RefContainer>
      <div ref={firstTabRef} />
      <ItemSlider
        title="업종별 라벨입니다"
        description="화장품, 제약, 식품 등 다양한 브랜드에서 제품과 브랜드를 홍보하기 위해 사용하는 라벨입니다."
        items={MOCK_DATA}
        link="basic-label/9?group_id=3&sub_id=9"
      />
      <div ref={secondTabRef} />
      <ItemSlider
        title="특수 라벨입니다"
        description="제품의 독특한 특성과 기능성을 부각시키는 라벨로, 특정 용도에 맞춘 다양한 기술과 재질이 활용되는 라벨입니다."
        items={SPECIAL_MOCK_DATA}
        link="basic-label/10?group_id=3&sub_id=10"
      />
      <div ref={thirdTabRef} />
      {/* <ItemSlider
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
      /> */}
      <InquiryContainer />
    </Container>
  );
};

export default BasicLabelPage;
