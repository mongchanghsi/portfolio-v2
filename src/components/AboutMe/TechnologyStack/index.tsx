import { ReferencePointer } from "@/utils/type";
import { forwardRef } from "react";
import { BaseGridStyle, GridContent, GridTitle } from "../util";
import { TechnologyStackData } from "./data";
import { TechnologyStackContent, TechnologyStackItem } from "./style";
import Image from "next/image";

const TechnologyStack = ({}, ref: ReferencePointer) => {
  return (
    <BaseGridStyle style={{ gridArea: "tech-stack" }} ref={ref}>
      <GridContent>
        <GridTitle>Technology Stack</GridTitle>
        <TechnologyStackContent>
          {TechnologyStackData.map((_tech) => (
            <TechnologyStackItem key={`1_${_tech.label}`}>
              <Image src={_tech.image} alt={_tech.label} fill />
            </TechnologyStackItem>
          ))}
          {TechnologyStackData.map((_tech) => (
            <TechnologyStackItem key={`2_${_tech.label}`}>
              <Image src={_tech.image} alt={_tech.label} fill />
            </TechnologyStackItem>
          ))}
          {TechnologyStackData.map((_tech) => (
            <TechnologyStackItem key={`3_${_tech.label}`}>
              <Image src={_tech.image} alt={_tech.label} fill />
            </TechnologyStackItem>
          ))}
        </TechnologyStackContent>
      </GridContent>
    </BaseGridStyle>
  );
};

const ForwardRefTechnologyStack = forwardRef(TechnologyStack);

export default ForwardRefTechnologyStack;
