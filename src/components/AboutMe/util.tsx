import theme from "@/styles/theme";
import styled from "styled-components";

export const BaseGridStyle = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${theme.colors.base2};
  padding: 18px;
  border-radius: 8px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 24px;
    border-radius: 12px;
  }
`;

export const OneGridStyle = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${theme.colors.base2};
`;

export const GridTitle = styled.p`
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  font-size: 12px;
  font-weight: 700;
`;

export const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
