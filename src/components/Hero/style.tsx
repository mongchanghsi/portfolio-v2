import theme from "@/styles/theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh; /* old browsers */
  height: 100dvh; /* new browsers */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 48px;
  padding: 24px;
  max-width: ${theme.breakpoints.xlarge};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 100%;
    height: 90%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 24px;
    gap: 0;
  }
`;

export const HeroLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const HeroRightSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 50%;
  }
`;

const HeroText = styled.h1`
  text-align: center;
  color: ${theme.colors.primary};
  line-height: 100%;
  font-weight: 700;
`;

export const HeroTextLarge = styled(HeroText)`
  color: ${theme.colors.highlight};
  font-size: 84px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 180px;
  }

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 240px;
  }
`;

export const HeroTextSmall = styled(HeroText)`
  color: ${theme.colors.primary};
  font-size: 32px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 72px;
  }

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 96px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  text-align: right;
  color: ${theme.colors.secondary};
  width: 80%;
  line-height: 100%;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 100%;
    font-size: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 32px;
  }
`;

export const HeroCode = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    top: 60px;
    right: 0;
  }
`;

export const HeroCircularText = styled.div`
  position: absolute;
  top: 120px;
  left: 50vw;
  transform: translateX(-50%);

  @media screen and (min-width: ${theme.breakpoints.large}) {
    top: 120px;
    left: 120px;
    transform: translateX(0%);
  }
`;
