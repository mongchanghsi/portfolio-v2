import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import baseFont from "@/styles/font";
import Spinner from "../../Loaders/Spinner";
import {
  GeneralButtonContainer,
  GeneralButtonIcon,
  GeneralButtonText,
} from "./style";

interface IProps {
  icon?: string | StaticImageData;
  loading?: boolean;
  label: string;
  handleClick?: () => void;
  notAllowed?: boolean;
}

const GeneralButton: FC<IProps> = ({
  icon,
  label,
  handleClick,
  loading = false,
  notAllowed,
}) => {
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
    <GeneralButtonContainer
      onClick={loading ? () => {} : handleClick}
      disabled={loading}
    >
      {loading ? (
        <Spinner color={"#000"} size={32} />
      ) : (
        <>
          <GeneralButtonText className={baseFont.className}>
            {label}
          </GeneralButtonText>
          {icon && (
            <GeneralButtonIcon>
              <Image src={icon} alt={label} fill />
            </GeneralButtonIcon>
          )}
        </>
      )}
    </GeneralButtonContainer>
  );
};

export default GeneralButton;
