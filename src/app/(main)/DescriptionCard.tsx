import Image from "next/image";
import React from "react";

interface DescriptionCareIProps {
  image: string;
  title: string;
  description: string;
  secondDescription: string;
}

const DescriptionCard: React.FC<DescriptionCareIProps> = (props) => {
  const { image, title, description, secondDescription } = props;

  return (
    <div className="flex items-center gap-[24px]">
      <Image src={image} alt="icon" />
      <div className="flex flex-col gap-[5px] items-start">
        <span className="text-[22px] font-bold text-[#000]">{title}</span>
        <span className="text-[18px] font-normal text-[#383838]">
          {description}
          <br />
          {secondDescription}
        </span>
      </div>
    </div>
  );
};

export default DescriptionCard;
