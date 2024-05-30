import { HorizonalLoop } from "@/components/shared/Animation";
import theme from "@/styles/theme";
import styled from "styled-components";

export const OpenForWorkContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  overflow: hidden;
  vertical-align: middle;
`;

export const OpenForWorkOverflow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  animation: ${HorizonalLoop} 5s linear infinite;
`;

export const OpenForWorkText = styled.p`
  color: ${theme.colors.primary};
  font-size: 24px;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 700;
  padding: 12px 0;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 32px;
    padding: 0;
  }
`;

export const OpenForWorkSeperator = styled(OpenForWorkText)`
  color: ${theme.colors.highlight};
`;
