import React from "react";
import bgrInformation from "../../assets/images/bgr-information.png";
import iconLanguage from "../../assets/images/icon-language.svg";
import iconSale from "../../assets/images/icon-sale.svg";
import iconPhone from "../../assets/images/icon-phone.svg";
import { Link } from "react-router-dom";

export const Information = () => {
  const informations = [
    {
      title: "10% discount for TabiLife members",
      icon: iconSale,
    },
    {
      title: "Mobile information in your language",
      icon: iconLanguage,
    },
    {
      title: "Smoother stays with smartphone technology",
      icon: iconPhone,
    },
  ];

  return (
    <div className="h-[600px] shrink-0 relative -z-30">
      <div
        className="-z-20 absolute w-full h-[600px] bg-lightgray bg-center bg-cover bg-no-repeat shrink-0"
        style={{ backgroundImage: "url(" + bgrInformation + ")" }}
      />
      <div className="-z-20 absolute w-[70%] h-[600px] shrink-0 bg-gradient-to-r from-blue-500 to-transparent via-blue-400" />
      <div className="w-[1240px] m-auto left-0 flex px-8 flex-col items-start gap-10 pt-20 h-full justify-center">
        {informations &&
          informations.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-5">
                <div
                  style={{
                    background:
                      "radial-gradient(61.81% 61.81% at 50.00% 50.00%, #7AC500 0%, #95F000 100%)",
                    backdropFilter: "blur(23.693693161010742px)",
                  }}
                  className="flex items-center justify-center gap-[31.5px] p-[15.8px] rounded-[10.5px]"
                >
                  <img
                    className="w-[30px] h-[30px] shrink-0"
                    src={item.icon}
                  ></img>
                </div>
                <p className="text-[22px] leading-8 line-h text-white capitalize font-bold">
                  {item.title}
                </p>
              </div>
            );
          })}
        <Link to="/react/signup">
          <button className="flex p-7 bg-blue-20 border-2 border-white rounded-2xl shadow-light">
            <p className="capitalize text-[22px] leading-8 text-white font-bold">
              Sign up to TabiLife to get exclusive offers
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};
