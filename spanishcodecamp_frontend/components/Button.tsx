import { ButtonHTMLAttributes, FC } from "react";
import { popFromDict } from "../utils/functions";

interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = (props) => {
  let className, label: string;
  [props, className] = popFromDict(props, "className");
  return (
    <button
      className={`px-3 py-1 m-2 duration-300 text-white border-2 border-white rounded-lg hover:border-blackPurple text-[1.2rem] hover:bg-gradient-to-r from-pink to-purple`}
      {...props}
    />
  );
};

export default Button;
