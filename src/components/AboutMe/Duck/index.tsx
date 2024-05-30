import Image from "next/image";
import RubberDuckGIF from "@/assets/images/rubber_duck_3.gif";
import { OneGridStyle } from "../util";

const Duck = () => {
  return (
    <OneGridStyle style={{ gridArea: "duck" }}>
      <Image src={RubberDuckGIF} alt="rubber_duck" fill />
    </OneGridStyle>
  );
};

export default Duck;
