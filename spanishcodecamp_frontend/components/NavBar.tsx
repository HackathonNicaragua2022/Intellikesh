import React from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "../assets/img/logo-1.png";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row mt-6 mb-4 sm:mb-0 justify-between items-center px-2 md:px-[3rem] bg-midnight h-[5rem] text-textColor w-full">
      <div className="flex items-center justify-center gap-4">
        <Image src={Logo} alt="logo" />
        <span className="text-[1.2rem] font-semibold text-white">
          SpanishCodeCamp
        </span>
      </div>
      <ul className="hidden gap-8">
        <li className="hover:text-yellow text-[1.2rem] duration-300">
          <a href="">Inicio</a>
        </li>{" "}
        <li className="hover:text-yellow text-[1.2rem] duration-300">
          <a href="">Información</a>
        </li>
        <li className="hover:text-yellow text-[1.2rem] duration-300">
          <a href="">Precios</a>
        </li>
      </ul>
      <div>
        <a href="login/">
          <Button type="outlined">Iniciar Sesión</Button>
        </a>
        <a href="registro/">
          <Button type="fill">Registrarse</Button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
