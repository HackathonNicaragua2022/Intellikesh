import React, { FC } from "react";
import FlatButton from "./FlatButton";

interface Topic {
  name: string;
}

interface PriceCard {
  title: string;
  description: string;
  price: string;
  priceType: string;
  contain: Topic[];
  type: number;
}

const PriceCard: FC<PriceCard> = (props) => {
  const style: Record<number, string> = {
    1: "bg-gradient-to-t from-[#675587] to-[#182747]",
    2: "bg-gradient-to-t from-purple to-yellow",
    3: "bg-gradient-to-t from-[#00AEAE] to-[#0038B0]",
  };

  return (
    <div
      className={`flex flex-col mt-8 hover:mb-[2rem] duration-300 items-center text-white py-8 px-[2rem] gap-4 rounded-3xl
      ${style[props.type]} ${
        props.type === 2 ? "h-[670px]" : "h-[570px]"
      } w-[350px]`}
    >
      <span className="text-[2rem] font-bold">{props.title}</span>
      <span className="text-[1.3rem] text-center">{props.description}</span>
      <div className="flex items-center">
        <span className="text-[2.5rem]">{props.price}</span>
        <span className="text-[2rem]">{props.priceType}</span>
      </div>
      <FlatButton formAction="submit">Elegir Plan</FlatButton>
      <ul className="text-gray text-[1.2rem]">
        {props?.contain.map((topic, index) => (
          <li key={`${index}`}>{`-${topic?.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
