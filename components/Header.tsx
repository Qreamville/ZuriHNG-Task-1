import Image from "next/image";
import React from "react";
import ProfileImage from "../assets/image/profile__img.svg";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
    <header className="h-52 flex flex-col items-center justify-center mt-8 relative">
      <div className="flex flex-col gap-y-3">
        <Image src={ProfileImage} id="profile_img" />
        <h2
          id="twitter"
          className="text-[#101828] font-semibold text-xl tracking-wider"
        >
          Annette Black
        </h2>
        <h2 id="slack" className="hidden">
          oyeleyebal
        </h2>
      </div>
      <div className="absolute top-0 right-10 md:right-40 xl:right-80 border h-10 w-10 grid place-items-center border-dashed border-[#d0d5dd] rounded-full cursor-pointer">
        <RiShareForwardLine
          size={20}
          color="#98A2B3"
          className="hidden md:block"
        />
        <BsThreeDots size={20} color="#98A2B3" className="md:hidden block" />
      </div>
    </header>
  );
};

export default Header;
