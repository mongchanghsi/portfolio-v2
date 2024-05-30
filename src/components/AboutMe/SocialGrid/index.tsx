import { forwardRef } from "react";
import Image from "next/image";
import { SocialGridContainer, SocialGridImage } from "./style";
import { ISocial } from "@/utils/social";
import { ReferencePointer } from "@/utils/type";

interface IProps {
  social: ISocial;
}

const SocialGrid = ({ social }: IProps, ref: ReferencePointer) => {
  const openTab = () => {
    window.open(social.url, "_blank");
  };

  return (
    <SocialGridContainer
      onClick={openTab}
      style={{ gridArea: social.id }}
      ref={ref}
    >
      <SocialGridImage>
        <Image src={social.image} alt={social.label} fill />
      </SocialGridImage>
    </SocialGridContainer>
  );
};

const ForwardRefSocialGrid = forwardRef(SocialGrid);

export default ForwardRefSocialGrid;
