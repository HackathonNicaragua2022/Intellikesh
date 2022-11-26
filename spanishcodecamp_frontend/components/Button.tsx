import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
  type: string;
  size?: string;
  children: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const types: any = {
    fill: `px-3 py-1 m-2 duration-300 text-black bg-white rounded-lg hover:bg-yellow ${
      props.size ?? ""
    }`,
    invertfill: `px-3 py-1 m-2 duration-300 text-black bg-yellow rounded-lg hover:bg-white ${
      props.size ?? "text-[1.5rem]"
    }`,
    light: `px-3 py-1 m-2 duration-300 text-black border-2 border-midnight rounded-lg hover:text-white hover:bg-midnight ${
      props.size ?? "text-[1.5rem]"
    }`,
    outlined: `px-3 py-1 m-2 duration-300 text-white border-2 border-white rounded-lg hover:border-yellow hover:bg-blackPurple ${
      props.size ?? ""
    } `,
  };

  return (
    <button onClick={props.onClick} className={types[props.type]}>
      {props.children}
    </button>
  );
};

export default Button;
