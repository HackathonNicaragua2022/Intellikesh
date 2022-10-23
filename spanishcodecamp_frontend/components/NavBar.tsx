import React from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "../assets/img/logo-1.png";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center bg-midnight h-[5rem] text-white w-full">
      <div className="flex items-center justify-center gap-4">
        <Image src={Logo} alt="logo" />
        <span className="text-[1.2rem] font-semibold">SpanishCodeCamp</span>
      </div>
      <ul className="flex gap-8">
        <li className="hover:text-pink text-[1.2rem]">
          <a href="">Inicio</a>
        </li>{" "}
        <li className="hover:text-pink text-[1.2rem]">
          <a href="">Información</a>
        </li>
        <li className="hover:text-pink text-[1.2rem]">
          <a href="">Precios</a>
        </li>
      </ul>
      <div className="">
        <a href="login/">
          <Button formAction="submit">Iniciar Sesión</Button>
        </a>
        <a href="registro/">
          <Button className="text-black bg-white" formAction="submit">
            Registrarse
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
