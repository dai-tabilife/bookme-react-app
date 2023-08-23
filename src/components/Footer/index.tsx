import tabilifeLogo from "../../assets/images/tabilife-logo.svg";

export const Footer = () => {
  return (
    <div className="px-8 flex flex-col items-center pt-16 pb-12 gap-12 bg-transparent-20 border-t border-blue-50">
      <div className="max-w-[1240px] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-4xl font-bold capitalize text-gray-20">
            Let’s get started on something great
          </p>
          <p className="text-center text-xl text-gray-20">
            Join over 4,000+ user already earn money from our site
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] flex flex-col items-start gap-8 w-full">
        <div className="pt-8 flex justify-between items-center self-stretch border-t border-gray-30">
          <img className="h-8 w-40" src={tabilifeLogo} alt="" />
          <div className="flex gap-12 items-center">
            <p className="flex gap-12 items-center text-gray-40">
              Terms and conditions
            </p>
            <p className="flex gap-12 items-center text-gray-40">
              © 2077 Tabilife. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
