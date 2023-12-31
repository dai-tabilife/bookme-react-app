import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MyContext from "../../context/context";
import { exploreHotelType } from "../../interface/interface";

export const ExploreGroupHotel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  const store = useContext(MyContext);
  const handleChangeExploreHotel=(newExploreHotel:Array<exploreHotelType>) => {
    console.log(newExploreHotel)
    store.setExplorHotel(newExploreHotel)
  }


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
        {store.exploreGroupHotel &&
          store.exploreGroupHotel.map((item, index) => {
            return (
              <div key={index} onClick={()=>handleChangeExploreHotel(item.list)}>
                <div
                  style={{ backgroundImage: `url(${item.city_image})` }}
                  className="w-[292px] h-[415px] mr-1 flex items-center justify-center cursor-pointer"
                >
                
                  <div className="w-[178px] h-[178px] fill-opacity-5 border border-dashed border-gray-300 backdrop-filter backdrop-blur-sm flex items-center justify-center rounded-full">
                    <div className="flex flex-col items-center gap-[1px]">
                      <p className="text-white text[28px] font-bold">
                        {item.city}
                      </p>
                      <div className="text-white">{item.count}</div>
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
