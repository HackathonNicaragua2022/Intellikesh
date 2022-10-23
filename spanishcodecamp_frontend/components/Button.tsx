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
      className={`hover:bg-gradient-to-r transition duration-300 from-[#5E03FF] to-[#FFC23C] hover:border-opacity-0 rounded-2xl text-3xl ${className}`}
      {...props}
    />
  );
};

export default Button;
