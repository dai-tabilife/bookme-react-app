import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgTokyo from "../../assets/images/imgTokyo.png";
import imgKyoto from "../../assets/images/imgKyoto.png";
import imgOsaka from "../../assets/images/imgOsaka.png";

export const ExploreGroupHotel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    // autoplay: true,
    initialSlide: 0,
  };

  const informations = [
    {
      title: "Tokyo",
      logo: imgTokyo,
      hotel: "(15 hotels)",
    },
    {
      title: "Kyoto",
      logo: imgKyoto,
      hotel: "(13 hotels)",
    },
    {
      title: "Osaka",
      logo: imgOsaka,
      hotel: "(12 hotels)",
    },
    {
      title: "Tokyo",
      logo: imgTokyo,
      hotel: "(11 hotels)",
    },
    {
      title: "Kyoto",
      logo: imgKyoto,
      hotel: "(10 hotels)",
    },
    {
      title: "Osaka",
      logo: imgOsaka,
      hotel: "(9 hotels)",
    },
  ];

  return (
    <div className="m-auto max-w-[1240px] px-8 flex flex-col items-start gap-6 w-full">
      <p
        style={{
          background: "linear-gradient(90deg, #40CCFF 0%, #3380FF 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="pb-6 pt-3 text-[32px] font-bold"
      >
        Explore
      </p>
      <Slider className="w-full mb-11" {...settings}>
        {informations &&
          informations.map((item, index) => {
            return (
              <div key={index}>
                <div
                  style={{ backgroundImage: `url(${item.logo})` }}
                  className="w-[292px] h-[415px] mr-1 flex items-center justify-center"
                >
                  <div className="w-[178px] h-[178px] fill-opacity-5 border border-dashed border-gray-300 backdrop-filter backdrop-blur-sm flex items-center justify-center rounded-full">
                    <div className="flex flex-col items-center gap-[1px]">
                      <p className="text-white text[28px] font-bold">
                        {item.title}
                      </p>
                      <div className="text-white">{item.hotel}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
