import useWindowDimensions from "@/hooks/common/useWindowDimensions";
import {
  HeroContainer,
  HeroDescription,
  HeroTextLarge,
  HeroTextSmall,
  HeroCode,
  HeroContent,
  HeroLeftSection,
  HeroRightSection,
  HeroCircularText,
} from "./style";
import CustomTypeAnimation from "../shared/TypeAnimation";
import CircularText from "@/components/shared/CircularText";

const Hero = () => {
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  return (
    <HeroContainer>
      <HeroCircularText>
        <CircularText text={"Eric Mong - Developer - "} />
      </HeroCircularText>

      <HeroCode>
        <CustomTypeAnimation />
      </HeroCode>
      <HeroContent>
        <HeroLeftSection>
          {windowDimensions.width >= LARGE_SCREEN_SIZE && (
            <HeroTextSmall>SINGAPORE</HeroTextSmall>
          )}
          <HeroTextLarge>ERIC</HeroTextLarge>
          <HeroTextSmall>DEVELOPER</HeroTextSmall>
        </HeroLeftSection>

        <HeroRightSection>
          <HeroDescription>
            Meet a software engineer who's great at making websites look awesome
            and work smoothly. Experienced in building and optimizing
            performance for significant, impactful large-scale projects.
          </HeroDescription>
        </HeroRightSection>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
