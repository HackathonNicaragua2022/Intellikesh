import { FC } from "react";
import { useRecoilValue } from "recoil";
import { apiErrorsAtom } from "../state/atoms";
import { popFromDict } from "../utils/functions";
import ErrorTag from "./ErrorTag";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  descriptiveText: string;
  extraLabel?: string;
}

const Input: FC<InputProps> = (props) => {
  const errors = useRecoilValue(apiErrorsAtom);
  let inputError: string | false = false;

  for (const [key, value] of Object.entries(errors)) {
    if (key === props.name) {
      inputError = value;
      break;
    }
  }
  let extraLabel: string;

  let [cleanedProps, descriptiveText] = popFromDict(props, "descriptiveText");
  [cleanedProps, extraLabel] = popFromDict(cleanedProps, "extraLabel");

  return (
    <div className="w-full form-control ">
      <label className="pb-0 label">
        <span
          className={`label-text text-xl md:text-2xl xl:text-3xl mb-1 font-extrabold`}
        >
          {descriptiveText}
        </span>
        {extraLabel && (
          <label className="label-text text-warning">{extraLabel}</label>
        )}
      </label>

      <input
        {...cleanedProps}
        className={`w-full rounded-xl border-midnight border-2 border-opacity-20 h-16 text-2xl px-4 ${
          inputError && "border-error"
        }`}
      />
      {inputError && <ErrorTag errorText={inputError} />}
    </div>
  );
};

export default Input;
