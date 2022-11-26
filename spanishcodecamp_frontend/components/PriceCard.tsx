import React, { FC } from "react";
import FlatButton from "./FlatButton";
import Button from "./Button";

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
      className={`flex flex-col mt-8 duration-300 items-center text-white py-8 px-[2rem] gap-4 rounded-3xl
      ${style[props.type]} ${
        props.type === 2 ? "h-[650px]" : "h-[570px]"
      } w-[300px] md:w-[350px]`}
    >
      <span className="text-[2rem] font-bold">{props.title}</span>
      <span className="text-[1.3rem] text-center">{props.description}</span>
      <div className="flex items-center">
        <span className="text-[2.5rem]">{props.price}</span>
        <span className="text-[2rem]">{props.priceType}</span>
      </div>
      <Button type="invertfill">Elegir Plan</Button>
      <ul className=" text-white text-[1.2rem]">
        {props?.contain.map((topic, index) => (
          <li key={`${index}`}>{`-${topic?.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
