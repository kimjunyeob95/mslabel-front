import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
  width: 380px;
  height: 380px;
`;

interface ItemCardIProps {
  thumbnail: any;
  title: string;
  description: string;
  id: number;
}

const ItemCard: React.FC<ItemCardIProps> = (props) => {
  const { thumbnail, title, description, id } = props;

  return (
    <>
      {/* <Link href={`/label-detail/${id}`}> */}
      {thumbnail && (
        <ThumbnailImage
          src={thumbnail}
          alt="thumbnail image"
          width={380}
          height={380}
        />
      )}
      <ItemCardContainer>
        <p>{title}</p>
        <span>{description}</span>
      </ItemCardContainer>
      {/* </Link> */}
    </>
  );
};

export default ItemCard;
