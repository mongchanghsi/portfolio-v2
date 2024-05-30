import styled from "styled-components";
import theme from "@/styles/theme";

export const LandingContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    flex-direction: row;
  }
`;

export const SwapContent = styled.div`
  position: relative;
  flex-basis: 100%;
`;

export const ChartContent = styled.div`
  position: relative;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;
`;
