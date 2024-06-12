import styled from "styled-components";
import theme from "@/styles/theme";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LayoutContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* old browsers */
  min-height: 100dvh; /* new browsers */

  overflow-y: auto;
  overflow-x: hidden;
`;
