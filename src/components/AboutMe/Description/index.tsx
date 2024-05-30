import { forwardRef } from "react";
import { BaseGridStyle, GridTitle, GridContent } from "../util";
import { DescriptionText } from "./style";
import { ReferencePointer } from "@/utils/type";

const Description = ({}, ref: ReferencePointer) => {
  return (
    <BaseGridStyle style={{ gridArea: "description" }} ref={ref}>
      <GridContent>
        <GridTitle>About me</GridTitle>
        <DescriptionText>
          I am currently employed as a Software Development Engineer at DBS
          Bank, where I am in the Risk Platform team. In addition to my
          professional responsibilities, I am deeply engaged in expanding my
          knowledge of Blockchain technology and frequently participate in
          various Hackathons. Outside of work, I'm just a degen following meme
          coins.
        </DescriptionText>
      </GridContent>
    </BaseGridStyle>
  );
};

const ForwardRefDescription = forwardRef(Description);

export default ForwardRefDescription;
