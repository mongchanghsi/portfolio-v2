import { TypeAnimation } from "react-type-animation";
import useWindowDimensions from "@/hooks/common/useWindowDimensions";

const BaseTypeAnimationStyle = {
  display: "inline-block",
  color: "#DEDEDE",
  lineHeight: "100%",
  fontFamily: "monospace",
  backgroundColor: "#2e2e2e",
  padding: "8px 0 8px 12px",
  borderRadius: "4px",
};

const CustomTypeAnimation = () => {
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  return windowDimensions.width < LARGE_SCREEN_SIZE ? (
    <TypeAnimation
      sequence={[
        "init()",
        2000,
        "dev()",
        2000,
        "debug()",
        2000,
        "test()",
        2000,
        "deploy()",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "18px",
        ...BaseTypeAnimationStyle,
      }}
    />
  ) : (
    <TypeAnimation
      sequence={[
        "init()",
        2000,
        "dev()",
        2000,
        "debug()",
        2000,
        "test()",
        2000,
        "deploy()",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "32px",
        ...BaseTypeAnimationStyle,
      }}
    />
  );
};

export default CustomTypeAnimation;
