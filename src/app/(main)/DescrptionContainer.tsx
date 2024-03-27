import React from "react";
import {
  ICON_DISCOUNT,
  ICON_HIGHT_QUALITY,
  ICON_QUICK_MAKE,
} from "../assets/svg";
import DescriptionCard from "./DescriptionCard";

const DescrptionContainer = () => {
  const multiLineString =
    "첫 번째 줄입니다.\n두 번째 줄입니다.\n세 번째 줄입니다.";

  return (
    <div className="flex flex-col items-center w-[1372px]">
      <div className="flex justify-between py-[80px] w-full">
        <DescriptionCard
          image={ICON_HIGHT_QUALITY}
          title="높은 퀄리티"
          description="다년간 노하우를 바탕으로"
          secondDescription="최고의 퀄리티를 자부합니다."
        />
        <DescriptionCard
          image={ICON_QUICK_MAKE}
          title="빠른 제작"
          description="원하는 시간에 맞춰"
          secondDescription="높은 품질로 신속하게 작업합니다."
        />
        <DescriptionCard
          image={ICON_DISCOUNT}
          title="합리적인 가격"
          description="고품질의 서비스를"
          secondDescription="합리적인 가격으로 제공합니다."
        />
      </div>
      <div className="h-[550px]">dasdasdas</div>
    </div>
  );
};

export default DescrptionContainer;
