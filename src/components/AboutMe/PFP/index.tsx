import Image from "next/image";
import { OneGridStyle } from "../util";
import PfpImage from "@/assets/images/pfp.png";
import { forwardRef } from "react";
import { ReferencePointer } from "@/utils/type";

export const PFP = ({}, ref: ReferencePointer) => {
  return (
    <OneGridStyle style={{ gridArea: "pfp" }} ref={ref}>
      <Image src={PfpImage} alt="pfp" fill />
    </OneGridStyle>
  );
};

const ForwardRefPFP = forwardRef(PFP);

export default ForwardRefPFP;
