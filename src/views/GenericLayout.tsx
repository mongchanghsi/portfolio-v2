import styled from "styled-components";
import theme from "@/styles/theme";

export const GenericContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
`;

export const GenericContent = styled.div`
  position: relative;
  width: 100%;

  max-width: calc(1440px);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
  }
`;
