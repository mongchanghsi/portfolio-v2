import { Fragment, forwardRef, useState } from "react";
import { BaseGridStyle } from "../util";
import {
  OpenForWorkContent,
  OpenForWorkOverflow,
  OpenForWorkText,
  OpenForWorkSeperator,
} from "./style";
import useWindowDimensions from "@/hooks/common/useWindowDimensions";
import { ReferencePointer } from "@/utils/type";

const OpenForWork = ({}, ref: ReferencePointer) => {
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const text = "Open For Work";
  const duplicates = 20;

  const repeat = Array.from({ length: duplicates }, (_, index) => (
    <Fragment key={index}>
      <OpenForWorkText>{text}</OpenForWorkText>
      <OpenForWorkSeperator>•</OpenForWorkSeperator>
    </Fragment>
  ));

  return (
    <BaseGridStyle style={{ gridArea: "open-for-work", padding: 0 }} ref={ref}>
      {windowDimensions.width < LARGE_SCREEN_SIZE ? (
        <OpenForWorkContent>
          <OpenForWorkOverflow>{repeat}</OpenForWorkOverflow>
        </OpenForWorkContent>
      ) : (
        <OpenForWorkContent
          onMouseEnter={() => setIsScrolling(true)}
          onMouseLeave={() => setIsScrolling(false)}
        >
          {isScrolling ? (
            <OpenForWorkOverflow>{repeat}</OpenForWorkOverflow>
          ) : (
            <OpenForWorkText>{text}</OpenForWorkText>
          )}
        </OpenForWorkContent>
      )}
    </BaseGridStyle>
  );
};

const ForwardRefOpenForWork = forwardRef(OpenForWork);

export default ForwardRefOpenForWork;
