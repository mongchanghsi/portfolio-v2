import theme from "@/styles/theme";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 18px;
  height: 100vh;
`;

export const HomeTitle = styled.h1`
  font-size: 56px;
  text-align: center;
  color: ${theme.colors.primary};
  line-height: 100%;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 84px;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 84px;
  }
`;

export const HomeDescription = styled.p`
  font-size: 24px;
  text-align: center;
  color: ${theme.colors.secondary};
  width: 80%;
  line-height: 100%;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 70%;
    font-size: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 32px;
  }
`;

export const HomeTitleSpan = styled.span`
  font-weight: 700;
  color: ${theme.colors.highlight};
`;
