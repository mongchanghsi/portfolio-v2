import { forwardRef } from "react";
import Image from "next/image";
import { DevAnimationContainer } from "./style";
import DeveloperBackdrop from "@/assets/images/developer.jpg";
import { ReferencePointer } from "@/utils/type";

const DevAnimation = ({}, ref: ReferencePointer) => {
  return (
    <DevAnimationContainer style={{ gridArea: "dev" }} ref={ref}>
      {/* <video
        src="https://storage.googleapis.com/creatorspace-public/users%2Fcldmxoe351qr8qr0zxxq28d72%2FzXkKHmD3UgGJJH2c-CleanShot%25202023-02-02%2520at%252019.11.36.mp4"
        autoPlay
        controls={false}
        loop={true}
      /> */}
      <Image src={DeveloperBackdrop} alt="pudgy_penguin" fill />
    </DevAnimationContainer>
  );
};

const ForwardRefDevAnimation = forwardRef(DevAnimation);

export default ForwardRefDevAnimation;
