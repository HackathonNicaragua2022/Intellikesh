import React, { FC, useState } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonItem {
  references: string;
  selected: string;
  icon: IconDefinition;
  title: string;
  index: number;
  onClick: React.MouseEventHandler;
}

const ButtonItem: FC<ButtonItem> = ({
  references,
  selected,
  onClick,
  title,
  index,
  icon,
}) => {
  const [active, setActive] = useState(false);
  const colors: any = {
    "1": "bg-orange",
    "2": "bg-blue",
    "3": "bg-purple",
    "4": "bg-pink",
  };

  return (
    <button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`flex items-center w-full py-2 hover:text-white duration-200 ${
        selected === references ? " text-white" : "text-textColor "
      }`}
      onClick={onClick}
    >
      <div
        className={`${active && colors["1"]} ${
          selected === references ? colors[index] : "bg-secondary"
        } h-[3rem] w-[3rem] mr-4 rounded-xl flex justify-center items-center`}
      >
        <FontAwesomeIcon className="text-[1.4rem]" icon={icon} />
      </div>
      <span className="text-[1.2rem] font-normal">{title}</span>
    </button>
  );
};

export default ButtonItem;
