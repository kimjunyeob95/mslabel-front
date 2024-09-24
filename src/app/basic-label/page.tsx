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
  IMAGE_SECURITY_THUMBNAIL,
  IMAGE_DOUBLE_THUMBNAIL,
  IMAGE_BACKSIDE_THUMBNAIL,
  IMAGE_BARCODE_THUMBNAIL,
  IMAGE_INGREDIENT_THUMBNAIL,
  IMAGE_INFORMATION_THUMBNAIL,
} from "../assets/image";
import ItemSlider from "../components/ItemSlider";
import { useSubMenuListHooks } from "../components/hooks/useSubMenuListHooks";
import Text from "../components/Text";
import Column from "../components/Column";
import { usePathname } from "next/navigation";

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

const MOCK_DATA = [
  {
    thumbnail: IMAGE_COSMETIC_THUMBNAIL,
    title: "화장품",
    description: `유연성과 투명도를 가진 라벨이 주로 사용됩니다. 특히 유포지나 무광라미를 사용하며, 엠보싱 등 특수 인쇄로도 제작합니다.`,
  },
  {
    thumbnail: IMAGE_HEALTH_THUMBNAIL,
    title: "제약 / 건강식품",
    description: `복잡한 정보를 효과적으로 전달하기 위해 이중 라벨이 사용되기도 하며, 아트지와 금무지, 유광라미를 많이 사용합니다.`,
  },
  {
    thumbnail: IMAGE_FOOD_THUMBNAIL,
    title: "식품 / 유통",
    description: `신선도와 안전성을 유지하며, 내구성과 내습성을 갖추기 위해 감열지, 아트지를 많이 사용합니다.`,
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
    description: `제품의 진품 여부를 확인할 수 있도록 특수한 인쇄 기술이나 홀로그램 등을 사용하여 위조를 방지하기 위해 활용합니다.`,
  },
  {
    thumbnail: IMAGE_TRANSPARENT_THUMBNAIL,
    title: "투명라벨",
    description: `라벨과 제품이 어우러지게 투명한 재질로 제작하여 내용물을 강조하고 제품의 고유 디자인을 유지하는 데 효과적입니다.`,
  },
];

const PROFESSIONAL_MOCK_DATA = [
  {
    thumbnail: IMAGE_SECURITY_THUMBNAIL,
    title: "봉인/보안",
    description: `제품의 무단 개봉을 방지하고 원상태 유지를 확인할 수 있도록 설계된 라벨로, 제거 시 파손되거나 보안 문구가 나타나도록 제작되어 보안성을 극대화합니다.`,
  },
  {
    thumbnail: IMAGE_DOUBLE_THUMBNAIL,
    title: "2중라벨/이중지",
    description: `제한된 공간에 많은 정보를 제공하기 위해 두 겹으로 구성된 라벨로, 상단 라벨을 들추면 숨겨진 정보가 나타나며, 다량의 법적 정보를 포함해야하는 제품에 적합합니다.`,
  },
  {
    thumbnail: IMAGE_BACKSIDE_THUMBNAIL,
    title: "배면",
    description: `투명한 용기 뒷면에 부착되어 제품을 통해 라벨이 보이도록 디자인된 라벨로, 제품 내용물의 색상과 디자인을 강조하며, 시각적 일체감을 제공합니다.`,
  },
];

const SIMPLELABEL_MOCK_DATA = [
  {
    thumbnail: IMAGE_BARCODE_THUMBNAIL,
    title: "바코드",
    description: `제품의 식별과 관리, 추적을 위해 사용하며, 스캐너로 읽을 수 있도록 고정된 형식의 코드가 인쇄된 라벨입니다.`,
  },
  {
    thumbnail: IMAGE_INGREDIENT_THUMBNAIL,
    title: "성분표기",
    description: `제품의 구성 성분과 영양 정보 등을 알리기 위해 설계된 라벨로 특히 식품, 화장품, 건강식품에 많이 활용합니다.`,
  },
  {
    thumbnail: IMAGE_INFORMATION_THUMBNAIL,
    title: "안내",
    description: `사용법, 주의사항, 보관 방법 등 제품 사용에 필요한 정보를 간단하고 명확하게 전달하는 라벨로, 카페, 상점 등에서 고객에게 영업시간, 이벤트 정보 등을 안내하는 데에도 사용됩니다.`,
  },
];

const BasicLabelPage = () => {
  const [isActivieRef, setIsActiveRef] = useState<string>("업종별 라벨");
  const { basicLabelSubMenuList, getSubBasicLabelList } = useSubMenuListHooks();

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
      setIsActiveRef("전문 라벨");
    } else if (
      fourthTabRef.current &&
      fifthTabRef.current &&
      scrollPosition >= fourthTabRef.current.offsetTop &&
      scrollPosition < fifthTabRef.current.offsetTop
    ) {
      setIsActiveRef("단순 라벨");
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
    if (typeof window !== "undefined") {
      const { group_id } = parse(window.location.search);

      getSubBasicLabelList(Number(group_id));
    }
  }, []);

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
                const ref =
                  item.sub_title === "업종별 라벨"
                    ? firstTabRef
                    : item.sub_title === "특수 라벨"
                    ? secondTabRef
                    : item.sub_title === "전문 라벨"
                    ? thirdTabRef
                    : fourthTabRef;

                handleOnScrollToRef(ref, item.sub_title);
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
      <ItemSlider
        title="전문 라벨입니다"
        description="특정 요구 사항에 맞춰 정밀하게 설계된 라벨로 기능성과 정확성을 중시하여 특별한 목적을 위해 사용하는 라벨입니다."
        items={PROFESSIONAL_MOCK_DATA}
        link="basic-label/19?group_id=3&sub_id=19"
      />
      <div ref={fourthTabRef} />
      <ItemSlider
        title="단순 라벨입니다"
        description="기본적인 정보 전달을 목적으로 한 간결하고 기능적인 라벨로 1도, 2도로 컬러가 적을 때 활용하는 라벨입니다. "
        items={SIMPLELABEL_MOCK_DATA}
        link="basic-label"
      />
      <div ref={fifthTabRef} />
      {/* <ItemSlider
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
