import React from "react";
import iconClose from "../../../assets/images/icon-close.svg";
import iconMarker from "../../../assets/images/icon-marker.svg";
import iconStar from "../../../assets/images/icon-star.svg";
import iconCircleBroken from "../../../assets/images/icon-circle-broken.svg";
import Slider from "react-slick";
import imgTokyo from "../../../assets/images/imgTokyo.png";
import imgKyoto from "../../../assets/images/imgKyoto.png";
import imgOsaka from "../../../assets/images/imgOsaka.png";

export const HotelDetailsModal = () => {
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

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={`https://inkythuatso.com/uploads/thumbnails/800/2022/05/1-hinh-nen-hoa-cuc-hoa-mi-inkythuatso-11-11-04-05.jpg`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col w-[1030px] bg-white">
      <div className="flex flex-col self-stretch p-6 gap-2 border border-gray-60">
        <div className="flex items-center self-stretch gap-4">
          <p className="flex flex-1 line-clamp-1 text-gray-20 overflow-hidden text-ellipsis font-bold">
            View hotel details
          </p>
          <img className="w-8 h-8" src={iconClose}></img>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <div className="flex self-stretch gap-7">
          <div className="w-[20%]">
            <Slider className="w-full mb-11" {...settings}>
              {informations &&
                informations.map((item, index) => {
                  return (
                    <div>
                      <div
                        key={index}
                        style={{ backgroundImage: `url(${item.logo})` }}
                        className="w-[320px] h-[320px]"
                      ></div>
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-gray-20 font-bold text-2xl">
              Trump International Hotel Washington D.C.
            </p>
            <p className="text-gray-80">
              Japan Hotel Alliance (JHA) is an alliance that provides a
              "business concierge" for the management and operation of hotel
              facilities.
            </p>
            <div className="flex self-stretch gap-4">
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex gap-1 self-stretch items-baseline">
                  <p
                    style={{
                      background:
                        "linear-gradient(270deg, #60C100 0%, #458900 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold text-[36px]"
                  >
                    $24
                  </p>
                  <p className="text-gray-20">/night</p>
                </div>
                <button className="max-w-[160px] flex justify-center items-center gap-2 px-5 py-3 rounded-lg border border-blue-50 bg-blue-50">
                  <p className="font-semibold text-white">Check Price</p>
                </button>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #40CCFF 0%, #3380FF 100%)",
                }}
                className="flex w-[104px] h-[120px] gap-[2px] items-center px-2 pt-2 pb-1 rounded"
              ></div>
            </div>
            <div className="h-[1px] self-stretch bg-gray-70"></div>
            <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
              <img className="w-6 h-6" src={iconMarker}></img>
              <p className="text-gray-20 font-medium">
                3517 W. Gray St. Utica, Pennsylvania 57867
              </p>
              <p className="text-blue-20 font-medium underline flex flex-1">
                Show on map
              </p>
            </div>
            <div className="flex items-center content-center flex-wrap self-stretch gap-2">
              <img className="w-6 h-6" src={iconStar} />
              <div className="text-gray-20 font-bold">4.5</div>
              <p className="text-gray-20">(211 reviews)</p>
            </div>
            <div className="flex flex-col self-stretch p-4 gap-4 rounded-2xl border border-gray-70">
              <div className="flex items-baseline self-stretch justify-between gap-4">
                <p className="text-gray-20 font-medium text-[18px]">
                  Amenities
                </p>
                <p className="text-right text-blue-20">See all</p>
              </div>
              <div className="flex flex-col self-stretch gap-3">
                <div className="gap-3 grid grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex items-center flex-1 gap-2">
                      <img
                        className="w-4 h-4"
                        src={iconCircleBroken}
                        alt="Icon"
                      />
                      <p className="text-sm text-gray-20">Free breakfast</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
