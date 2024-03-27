"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MAIN_LOGO } from "../assets/svg";
import { HeaderContents, HEADER_CONTENT } from "../models/HeaderContents";

export const Header = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null);

  return (
    <div className="flexcenter h-[105px]">
      <div className="flexspacebetween max-w-[1372px] ">
        <Image src={MAIN_LOGO} alt="main logo" />
        <div className="flex items-center gap-x-[60px]">
          {HEADER_CONTENT.map((item: HeaderContents, idx: number) => {
            return (
              <div
                key={idx}
                className={`flex flex-col items-center relative text-[18px] font-bold cursor-pointer text-[#414141] hover:text-[#3870AA]`}
                onMouseOver={() => setIsActiveIndex(idx)}
                onMouseLeave={() => setIsActiveIndex(null)}
              >
                {item.title}
                {isActiveIndex === idx && (
                  <div className="flex flex-col items-center gap-[32px] py-[30px] px-[16px] absolute top-[40px] w-[112px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-[#fff] rounded-[20px]">
                    {item.items.map((contentsItem, contentsIdx) => {
                      return (
                        <div
                          key={contentsIdx}
                          className="text-[16px] font-normal text-[#383838]"
                        >
                          {contentsItem.content}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
