import React from "react";
import imgTokyo from "../../assets/images/imgTokyo.png";
import imgKyoto from "../../assets/images/imgKyoto.png";
import imgOsaka from "../../assets/images/imgOsaka.png";
import iconBrand from "../../assets/images/icon-brand.png";

export const Brand = () => {
  const informations = [
    {
      logo: iconBrand,
    },
    {
      logo: iconBrand,
    },
    {
      logo: iconBrand,
    },
    {
      logo: iconBrand,
    },
    {
      logo: iconBrand,
    },
    {
      logo: iconBrand,
    },
  ];

  return (
    <div className="flex items-start gap-[17px] pt-[35px] pb-[195px] px-[45px] bg-black-20">
      {informations &&
        informations.map((item, index) => {
          const isLastItem = index === informations.length - 1;
          const borderClass = isLastItem ? "" : "border-r";
          return (
            <div
              key={index}
              className={`flex-1 gap-[10px] self-stretch flex flex-col items-center justify-center ${borderClass} border-white`}
            >
              <img src={item.logo}></img>
            </div>
          );
        })}
    </div>
  );
};
