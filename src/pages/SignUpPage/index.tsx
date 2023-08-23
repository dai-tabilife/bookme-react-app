import { useState } from "react";
import bgrSignup from "../../assets/images/bgr-signup.png";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconGoogle from "../../assets/images/icon-google.svg";
import tabilifeLogo from "../../assets/images/tabilife-logo.svg";
import { SignUpModal } from "../../components/Modal/SignUpModal";

export const SignUpPage = () => {
  const [isSignUpModal, setIsSignUpModal] = useState<boolean>(false);
  const handleOpenSignUpModal = () => {
    setIsSignUpModal(true);
  };

  return (
    <div className="bg-white px-4 md:pr-0 md:pl-8 flex">
      <div className="w-full md:w-1/2 pb-8 min-h-screen">
        <div className="py-8">
          <img className="h-8 w-40" src={tabilifeLogo} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[400px] flex flex-col items-center gap-8">
            <div className="flex flex-col self-stretch gap-3">
              <p className="self-stretch text-4xl font-bold text-gray-700">
                Sign up
              </p>
              <p className="self-stretch text-gray-500">
                To get started, please sign up
              </p>
            </div>
            <div className="flex gap-6 self-stretch items-center flex-col">
              <div className="flex flex-col self-stretch gap-3">
                <button className="flex px-4 py-[10px] justify-center items-center self-stretch gap-3 rounded-lg bg-white border border-gray-300 shadow-gray">
                  <img className="h-6 w-6" src={iconGoogle} alt="" />
                  <div className="font-semibold text-gray-700">
                    Sign in with Google
                  </div>
                </button>
              </div>
              <div className="flex flex-col self-stretch gap-3">
                <button className="flex px-4 py-[10px] justify-center items-center self-stretch gap-3 rounded-lg bg-white border border-gray-300 shadow-gray">
                  <img className="h-6 w-6" src={iconFacebook} alt="" />
                  <div className="font-semibold text-gray-700">
                    Sign in with Facebook
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 self-stretch">
              <div className="h-[1px] flex-1 bg-gray-90"></div>
              <p className="text-sm text-gray-40">or</p>
              <div className="h-[1px] flex-1 bg-gray-90"></div>
            </div>
            <form className="flex flex-col gap-5 self-stretch">
              <div className="flex flex-col gap-[6px] self-stretch">
                <p className="text-gray-100 font-medium text-sm text-left">
                  First Name
                </p>
                <input
                  placeholder="First Name"
                  className="text-gray-500 flex items-center px-[14px] py-[10px] rounded-lg border bg-white border-gray-300 shadow-gray"
                ></input>
              </div>
              <div className="flex flex-col gap-[6px] self-stretch">
                <p className="text-gray-100 font-medium text-sm text-left">
                  Last Name
                </p>
                <input
                  placeholder="Last Name"
                  className="text-gray-500 flex items-center px-[14px] py-[10px] rounded-lg border bg-white border-gray-300 shadow-gray"
                ></input>
              </div>
              <div className="flex flex-col gap-[6px] self-stretch">
                <p className="text-gray-100 font-medium text-sm text-left">
                  Email
                </p>
                <input
                  placeholder="Enter your email"
                  className="text-gray-500 flex items-center px-[14px] py-[10px] rounded-lg border bg-white border-gray-300 shadow-gray"
                ></input>
              </div>
              <div className="flex flex-col gap-[6px] self-stretch">
                <p className="text-gray-100 font-medium text-sm text-left">
                  Password
                </p>
                <input
                  placeholder="Create a password"
                  className="text-gray-500 flex items-center px-[14px] py-[10px] rounded-lg border bg-white border-gray-300 shadow-gray"
                ></input>
                <p className="text-gray-600 text-xs text-left">
                  Must be at least 8 characters.
                </p>
              </div>
              <div className="flex flex-col gap-[6px] self-stretch">
                <p className="text-gray-100 font-medium text-sm text-left">
                  ConfirmPassword
                </p>
                <input
                  placeholder="Create a password"
                  className="text-gray-10 flex items-center px-[14px] py-[10px] rounded-lg border bg-white border-gray-300 shadow-gray"
                ></input>
                <p className="text-gray-600 text-xs text-left">
                  Must be at least 8 characters.
                </p>
              </div>
            </form>
            <button
              onClick={handleOpenSignUpModal}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 border border-blue-50 rounded-lg self-stretch shadow-gray"
            >
              <p className="text-white font-semibold">Get started</p>
            </button>
            <SignUpModal
              isSignUpModal={isSignUpModal}
              setIsSignUpModal={setIsSignUpModal}
            />
            <div className="flex justify-center gap-1 self-stretch">
              <p className="text-gray-600 text-sm">Already have an account?</p>
              <button className="flex items-center gap-2 justify-center">
                <p className="font-extrabold text-sm text-blue-50">Log in</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img
          className="w-full max-h-screen min-h-full bg-center bg-cover bg-no-repeat flex items-baseline justify-center self-center flex-1 rounded-l-[40px]"
          src={bgrSignup}
          alt=""
        />
      </div>
    </div>
  );
};
