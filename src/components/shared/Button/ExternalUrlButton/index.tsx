import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import baseFont from "@/styles/font";
import { ExternalUrlButtonContainer } from "./style";
import {
  GeneralButtonContainer,
  GeneralButtonIcon,
  GeneralButtonText,
} from "../GeneralButton/style";

interface IProps {
  icon?: string | StaticImageData;
  label: string;
  url: string;
  notAllowed?: boolean;
}

const ExternalUrlButton: FC<IProps> = ({ icon, label, url, notAllowed }) => {
  if (notAllowed) {
    return (
      <GeneralButtonContainer notAllowed disabled>
        <GeneralButtonText className={baseFont.className} notAllowed>
          {label}
        </GeneralButtonText>
      </GeneralButtonContainer>
    );
  }

  return (
    <ExternalUrlButtonContainer href={url} target="_blank">
      <GeneralButtonText className={baseFont.className}>
        {label}
      </GeneralButtonText>
      {icon && (
        <GeneralButtonIcon>
          <Image src={icon} alt={label} fill />
        </GeneralButtonIcon>
      )}
    </ExternalUrlButtonContainer>
  );
};

export default ExternalUrlButton;
