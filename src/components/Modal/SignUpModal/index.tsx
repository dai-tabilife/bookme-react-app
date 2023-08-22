import React, { useState } from "react";
import iconClose from "../../../assets/images/icon-close.svg";
import Illustration from "../../../assets/images/Illustration.svg";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

type SignUpModalProps = {
  isSignUpModal: boolean;
  setIsSignUpModal: (value: boolean) => void;
};

export const SignUpModal: React.FC<SignUpModalProps> = ({
  isSignUpModal,
  setIsSignUpModal,
}) => {
  const handleCloseSignUpModal = () => {
    setIsSignUpModal(false);
  };

  return (
    <Modal
      open={isSignUpModal}
      onClose={handleCloseSignUpModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      className="px-4 flex items-center justify-center"
    >
      <div className="flex flex-col max-w-[816px] bg-white rounded-2xl">
        <div
          className="flex p-6 gap-2 flex-col items-end self-stretch"
          onClick={handleCloseSignUpModal}
        >
          <img className="w-8 h-8" src={iconClose}></img>
        </div>
        <div className="gap-7 flex flex-col self-stretch px-6 pb-6">
          <div className="flex flex-col items-center self-stretch gap-4">
            <img className="w-[240px] h-[240px]" src={Illustration}></img>
            <div className="flex flex-col self-stretch gap-4">
              <p className="self-stretch flex-1 text-gray-700 text-2xl font-medium text-center">
                Thank You For Signing Up
              </p>
              <p className="self-stretch text-gray-500 text-center">
                Get ready for an amazing journey. We're thrilled you joined us!
                Explore, connect, and experience the magic of our community
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link to="/jha/">
              <button
                onClick={handleCloseSignUpModal}
                className="max-w-[180px] flex items-center justify-center gap-2 px-5 py-3 bg-blue-50 border border-blue-50 rounded-lg self-stretch shadow-gray"
              >
                <p className="text-white font-semibold">Back to home</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};
