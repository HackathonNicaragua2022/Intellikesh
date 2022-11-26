import React from "react";
import User from "../assets/img/user.png";
import Image from "next/image";
import PriceSection from "../components/PriceSection";
import Button from "../components/Button";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className=" w-3/4 sm:w-2/4 text-[1.5rem] md:text-[2rem] xl:text-[4rem] lg:text-[3rem] mb-10 text-center text-white">
        <span className="font-extrabold texto CustomTexto">
          Inicia en el mundo de{" "}
        </span>
        <span className="font-extrabold texto CustomTexto">
          desarrollo de software{" "}
        </span>
        <span className="font-extrabold texto CustomTexto">nosotros.</span>
      </div>
      <div className="relative w-[80%] h-[300px] md:h-[500px] xl:h-[700px]">
        <Image src={User} alt="user-image" layout="fill" />
      </div>
      <br />
      <Button type="invertfill">Empezar Gratis</Button>
      <PriceSection />
    </div>
  );
};

export default HomePage;
