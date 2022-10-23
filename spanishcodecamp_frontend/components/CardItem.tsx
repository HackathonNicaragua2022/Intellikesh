import { faHouse, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface CardItem {
  title: string;
  icon: IconDefinition;
  amount: number;
}

const CardItem: FC<CardItem> = (props) => {
  return (
    <div className="bg-black w-[12rem] h-[8rem] rounded-xl p-1">
      <div className="flex items-center justify-around py-1">
        <FontAwesomeIcon
          className="text-[1.5rem] pr-[2rem] flex items-center justify-center"
          icon={props.icon}
        />
        <div className="flex items-center justify-center w-[3rem] h-[3rem] bg-white rounded-[3rem]">
          <span className="text-black text-[1.2rem]">{`${props.amount}`}</span>
        </div>
      </div>
      <div className="flex flex-col text-[1.1rem] px-1 text-gray pt-2 font-bold">
        <span>{props.title}</span>
        <span>Completados</span>
      </div>
    </div>
  );
};

export default CardItem;
