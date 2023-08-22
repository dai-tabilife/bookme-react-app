import React from "react";
import tabilifeLogo from "../../assets/images/tabilife-logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full backdrop-blur-md fixed bg-gray-60 z-50">
      <div className="m-auto max-w-[1240px] flex justify-between items-center px-8  h-20">
        <div className="flex gap-10 items-center">
          <img className="h-8 w-40" src={tabilifeLogo} />
          <div className="flex gap-8">
            <button className="font-semibold flex justify-center items-center gap-2 text-gray-600 py-1">
              Home
            </button>
            <button className="font-semibold flex justify-center items-center gap-2 text-gray-600 py-1">
              Member center
            </button>
            <button className="font-semibold flex justify-center items-center gap-2 text-gray-600 py-1">
              Hotels
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <button className="font-semibold flex justify-center items-center gap-2 px-5 py-3 rounded-l-lg text-gray-600 border-r border-gray-50">
              USD
            </button>
            <button className="font-semibold flex justify-center items-center gap-2 px-5 py-3 rounded-r-lg text-gray-600">
              Log in
            </button>
          </div>
          <Link to="/jha/signup">
            <button className="font-semibold flex justify-center items-center gap-2 px-5 py-3 rounded-lg border border-blue-50 bg-blue-50 text-white">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
