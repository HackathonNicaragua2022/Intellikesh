import React from "react";
import User from "../assets/img/user.png";
import Image from "next/image";
import PriceSection from "../components/PriceSection";
import Button from "../components/Button";
import SideButton from "../components/sideButton";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
      <br />
      <Button type="invertfill">Empezar Gratis</Button>
      <PriceSection />
    </div>
  );
};

export default HomePage;
