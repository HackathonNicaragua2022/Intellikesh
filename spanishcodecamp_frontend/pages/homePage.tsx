import React from "react";
import User from "../assets/img/user.png";
import Image from "next/image";
import Button from "../components/Button";
import FlatButton from "../components/FlatButton";
import PriceSection from "../components/PriceSection";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-10 ">
      <div className="w-2/4 mb-10 text-center text-white">
        <span className="text-[4rem] font-extrabold texto CustomTexto">
          Inicia en el mundo de{" "}
        </span>
        <span className="text-[4rem] font-extrabold texto CustomTexto">
          desarrollo de software{" "}
        </span>
        <span className="text-[4rem] font-extrabold texto CustomTexto">
          nosotros.
        </span>
      </div>
      <Image src={User} alt="user-image" />
      <FlatButton className="text-[2rem] mt-[3rem]" formAction="submit">
        Empezar Gratis
      </FlatButton>
      <PriceSection />
    </div>
  );
};

export default HomePage;
