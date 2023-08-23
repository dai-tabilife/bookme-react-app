import { useContext } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import MyContext from "../../context/context";
import { CustomImage } from "../custom/customImage";

export const ExploreHotel = () => {

  const {exploreHotel} = useContext(MyContext);

  return (
    <div className="m-auto max-w-[1240px] px-8 flex flex-col items-start gap-6 w-full pb-20">
      <p className="pb-6 pt-3 text-[28px] font-bold text-gray-20">
        Tokyo hotels
      </p>
      <div className="grid grid-cols-4 gap-6 w-full">
        {exploreHotel &&
          exploreHotel.map((item, index) => {
            return (
              <div
                key={index}
                className="gap-2 flex flex-col items-start rounded-lg bg-white"
              >
                <CustomImage url={item.property_image}  className="rounded-lg h-[286px] self-stretch" />
              
                <div className="flex flex-col items-start self-stretch gap-[6px]">
                  <p className="truncate text-left self-stretch overflow-hidden text-gray-20 font-bold text-ellipsis">
                    {item.property_city}
                  </p>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" src={item.property_image} alt=""/>
                    <div className="text-gray-20 font-bold text-xs">
                      {item.property_name}
                    </div>
                    <p className="text-gray-20 text-xs">{item.property_price}</p>
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
                      {item.property_price}
                    </p>
                    <p className="text-gray-20 font-bold text-xs">
                      {item.spot_hotel_id}
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
