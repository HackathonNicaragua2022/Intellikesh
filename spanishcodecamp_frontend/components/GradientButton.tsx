import Link from "next/link";
import { ButtonHTMLAttributes, FC } from "react";
import { popFromDict } from "../utils/functions";

interface GrandientButton
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const GrandientButton: FC<GrandientButton> = (props) => {
  let className, label: string;
  [props, className] = popFromDict(props, "className");
  return (
    <Link href="sideBar/">
      <button
        className={`px-3 py-1 m-2 duration-300 text-[1.8rem] text-black border-2 border-black rounded-lg hover:border-0 hover:bg-gradient-to-r from-purple to-yellow mt-6 ${className}`}
        {...props}
      />
    </Link>
  );
};

export default GrandientButton;
