import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgTokyo from "../../assets/images/imgTokyo.png";
import imgKyoto from "../../assets/images/imgKyoto.png";
import imgOsaka from "../../assets/images/imgOsaka.png";
import iconStar from "../../assets/images/icon-star.svg";

export const ExploreHotel = () => {
  const informations = [
    {
      title: "Hotel Alpin Spa Tuxerhof",
      logo: imgTokyo,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
    {
      title: "Manhattan Tower Apartment Hotel",
      logo: imgKyoto,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
    {
      title: "French Quarter Inn",
      logo: imgOsaka,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
    {
      title: "Hotel Brick Barcelona",
      logo: imgTokyo,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
    {
      title: "The Elmar Boutique Hotel",
      logo: imgKyoto,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
    {
      title: "Marseilles Beachfront Hotel",
      logo: imgOsaka,
      icon: iconStar,
      evaluate: "4.5",
      price: "$24",
      type: "/night",
      reviews: "(211 reviews)",
    },
  ];

  return (
    <div className="m-auto max-w-[1240px] px-8 flex flex-col items-start gap-6 w-full pb-20">
      <p className="pb-6 pt-3 text-[28px] font-bold text-gray-20">
        Tokyo hotels
      </p>
      <div className="grid grid-cols-4 gap-6 w-full">
        {informations &&
          informations.map((item, index) => {
            return (
              <div
                key={index}
                className="gap-2 flex flex-col items-start rounded-lg bg-white"
              >
                <img
                  className="rounded-lg h-[286px] flex justify-center items-center self-stretch"
                  src={item.logo}
                />
                <div className="flex flex-col items-start self-stretch gap-[6px]">
                  <p className="truncate text-left self-stretch overflow-hidden text-gray-20 font-bold text-ellipsis">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={item.icon} />
                    <div className="text-gray-20 font-bold text-xs">
                      {item.evaluate}
                    </div>
                    <p className="text-gray-20 text-xs">{item.reviews}</p>
                  </div>
                  <div className="flex items-baseline self-stretch">
                    <p
                      style={{
                        background:
                          "linear-gradient(270deg, #60C100 0%, #458900 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="font-bold"
                    >
                      {item.price}
                    </p>
                    <p className="text-gray-20 font-bold text-xs">
                      {item.type}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
