import React from "react";
import Image from "next/image";
import Logo from "../assets/img/logo-1.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[10rem] w-full text-white px-10">
      <div className="flex items-center justify-center gap-4 text-white">
        <Image src={Logo} alt="logo" />
        <span className="text-[1.2rem] font-semibold">SpanishCodeCamp</span>
      </div>
      <span>© 2022 SpanishCodeCamp, All Rights Reserved</span>
    </div>
  );
};

export default Footer;
