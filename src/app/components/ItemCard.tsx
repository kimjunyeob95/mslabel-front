import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

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
`;

const ThumbnailImage = styled(Image)`
  width: 400px;
  height: 400px;
`;

interface ItemCardIProps {
  thumbnail: any;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardIProps> = (props) => {
  const { thumbnail, title, description } = props;

  return (
    <Link href="label-detail/1">
      <ThumbnailImage src={thumbnail} alt="thumbnail image" />
      <ItemCardContainer>
        <p>{title}</p>
        <span>{description}</span>
      </ItemCardContainer>
    </Link>
  );
};

export default ItemCard;
