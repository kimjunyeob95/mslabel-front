"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import ItemCard from "./ItemCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  padding: 80px 0px;

  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const SlideContainer = styled(Swiper)`
  border: 1px solid red;

  .swiper-wrapper {
    display: flex;
    justify-content: flex-start;
    max-width: 1288px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    gap: 16px;

    .slide-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: flex-start;
    }

    p {
      color: #000;

      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
    }

    span {
      color: #414141;

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }

  img {
    width: 400px;
    height: 400px;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 4px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #143e7e;

  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
`;

interface ItemSliderIProps {
  title: string;
  description: string;
  items: {
    thumbnail: any;
    title: string;
    description: string;
  }[];
  link: string;
}

const ItemSlider: React.FC<ItemSliderIProps> = (props) => {
  const { title, description, items, link } = props;

  return (
    <Container>
      <Column style={{ gap: "8px" }}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Column>
      <SlideContainer
        slidesPerView={3}
        spaceBetween={44}
        centeredSlides={false}
        navigation={true}
        breakpoints={{
          1471: {
            slidesPerView: 3,
            spaceBetween: 44,
          },
        }}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <ItemCard
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
              />
            </SwiperSlide>
          );
        })}
      </SlideContainer>
      <Link href={link}>
        <Button>전체보기</Button>
      </Link>
    </Container>
  );
};

export default ItemSlider;
