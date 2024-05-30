import theme from "@/styles/theme";
import styled from "styled-components";

export const AboutMeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 48px 0;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    height: 100vh;
    padding: 48px 0;
  }
`;

export const AboutMeContent = styled.div`
  position: relative;
  display: grid;
  grid-gap: 12px;

  grid-template-columns: repeat(3, 100px);
  grid-template-areas:
    "crypto-chart crypto-chart crypto-chart"
    "description description description"
    "github linkedin cv"
    "open-for-work open-for-work open-for-work"
    "tech-stack tech-stack tech-stack";

  @media screen and (min-width: ${theme.breakpoints.large}) {
    grid-template-columns: repeat(6, 120px);
    grid-gap: 16px;
    grid-template-areas:
      "description description description description crypto-chart crypto-chart"
      "description description description description pfp cv"
      "description description description description dev dev"
      "open-for-work open-for-work open-for-work duck dev dev"
      "github linkedin tech-stack tech-stack tech-stack tech-stack";
  }
`;
