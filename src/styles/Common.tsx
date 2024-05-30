import styled from "styled-components";
import theme from "./theme";

export const Title = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  letter-spacing: 0.7px;

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 48px;
    letter-spacing: 1px;
  }
`;

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.5px;
  text-transform: capitalize;

  color: ${theme.colors.primary};

  // text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.67);

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 1px;
  // text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.71);

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 24px;
  }
`;

export const SmallText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  letter-spacing: 1px;

  color: ${theme.colors.primary};
  opacity: 0.8;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 16px;
  }
`;
