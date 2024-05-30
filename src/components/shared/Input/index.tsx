import { FC } from "react";
import baseFont from "@/styles/font";
import { InputContainer } from "./style";

interface IProps {
  placeholder?: string;
  value: string;
  handleChange: (_value: string) => void;
  type?: "text" | "number";
}

const Input: FC<IProps> = ({
  placeholder = "",
  value,
  handleChange,
  type = "text",
}) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
