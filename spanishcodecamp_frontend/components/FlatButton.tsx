import { ButtonHTMLAttributes, FC } from "react";
import { popFromDict } from "../utils/functions";

interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const FlatButton: FC<ButtonProps> = (props) => {
  let className, label: string;
  [props, className] = popFromDict(props, "className");
  return (
    <button
      className={`px-3 py-1 m-2 duration-300 text-black rounded-lg text-[1.8rem] bg-yellow hover:bg-white ${className}`}
      {...props}
    />
  );
};

export default FlatButton;
