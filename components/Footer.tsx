import Image from "next/image";
import React from "react";
import I4G from "../assets/image/I4G.png";
import Zuri from "../assets/image/zuri.png";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <hr />
      <div className="flex flex-col md:flex-row py-6 items-center justify-between gap-y-4">
        <Image src={Zuri} alt="Zuri" />
        <p className="font-medium text-[#667085] text-md">
          HNG Internship 9 Frontend Task
        </p>
        <Image src={I4G} alt="14G" />
      </div>
    </footer>
  );
};

export default Footer;
