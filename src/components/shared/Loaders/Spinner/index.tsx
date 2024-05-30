import { FC } from "react";
import theme from "@/styles/theme";
import { SpinnerContainer } from "./style";

interface IProps {
  color?: string;
  size?: number;
}

const Spinner: FC<IProps> = ({ color = theme.colors.primary, size = 80 }) => {
  return (
    <SpinnerContainer color={color} size={size} data-testid="spinner-loader">
      <div />
      <div />
      <div />
    </SpinnerContainer>
  );
};

export default Spinner;
