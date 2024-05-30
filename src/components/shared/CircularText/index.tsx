import { FC } from "react";
import {
  CircleTextContainer,
  CircleTextContent,
  CircleTextLabel,
} from "./style";

type IProps = {
  text: string;
  size?: number;
  fontSize?: number;
};

const CircularText: FC<IProps> = ({ text = "", size = 100, fontSize = 12 }) => {
  return (
    <CircleTextContainer size={size}>
      <CircleTextContent>
        {text.split("").map((_char, index) => (
          <CircleTextLabel
            size={size}
            fontSize={fontSize}
            key={`CircularText_${_char}_${index}`}
            style={{ transform: `rotate(${index * (360 / text.length)}deg)` }}
          >
            {_char}
          </CircleTextLabel>
        ))}
      </CircleTextContent>
    </CircleTextContainer>
  );
};

export default CircularText;
