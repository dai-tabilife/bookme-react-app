import React from "react";
import imgKyoto from "../../assets/images/imgKyoto.png";
import JHALogo from "../../assets/images/jha-logo.png";

export const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${imgKyoto})` }}
      className="flex justify-center items-center gap-12 py-24 bg-lightgray bg-center bg-cover bg-no-repeat"
    >
      <div className="m-auto max-w-[1240px] px-8">
        <div
          style={{
            background:
              "linear-gradient(123deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.00) 28.19%, rgba(255, 255, 255, 0.05) 77.30%, rgba(255, 255, 255, 0.14) 100%)",
          }}
          className=" rounded-2xl border border-white shadow-light30 backdrop-blur-18 flex flex-col justify-center items-center gap-6 p-16"
        >
          <img src={JHALogo} />
          <p className="text-white font-bold text-[48px]">
            About Japan Hotel Alliance
          </p>
          <p className="text-white">
            Japan Hotel Alliance (JHA) is an alliance that provides a "business
            concierge" for the management and operation of hotel facilities. JHA
            is the first of its kind in Japan, utilizing the latest hotel
            network to provide one-stop solutions for hotel facilities
            regardless of size, and aims to realize ideal operations that make
            the most of each facility's qualities.
          </p>
        </div>
      </div>
    </div>
  );
};
