import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";

interface StatusBar {
  image: StaticImageData;
  courseName: string;
  level: string;
}

const StatusBar: FC<StatusBar> = ({ image, courseName, level }) => {
  return (
    <div className="w-full h-[240px] p-6 bg-complement rounded-xl">
      <section className="flex items-center justify-between pb-4 border-b-2 border-textColor">
        <article className="flex items-center gap-4">
          <div className="relative flex justify-center items-center w-[70px] h-[70px] bg-assent rounded-[3rem]">
            <Image src={image} alt="Image" layout="fill" />
          </div>
          <div className="flex flex-col text-white text-[1.6rem]">
            <span>{courseName}</span>
            <span className="text-[1rem] text-textColor">{level}</span>
          </div>
        </article>
        <article>
          <Button size="text-[1.2rem]" type="invertfill">
            Continuar
          </Button>
        </article>
      </section>
      <section className="flex items-center justify-between mt-2">
        <div className="flex flex-col w-3/5">
          <span className="text-[1.3rem] text-white">
            ¿Quieres comprobar tus conocimientos?
          </span>
          <span className="text-[1.1rem] text-textColor">
            Practica con los ejercicios asignados a este curso y asi mejora el
            dominio de los temas que estas estudiando
          </span>
        </div>
        <div>
          <Button size="text-[1.2rem]" type="outlined">
            Continuar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StatusBar;
