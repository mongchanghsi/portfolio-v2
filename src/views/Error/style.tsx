import styled from "styled-components";
import theme from "@/styles/theme";

export const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px - 37px - 48px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    height: calc(100vh - 86px - 37px - 92px);
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    height: calc(100vh - 86px - 37px - 112px);
  }
`;

export const ErrorHeader = styled.h2`
  color: #000;
  text-align: center;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 5px;
  color: ${theme.colors.primary};
`;

export const ErrorText = styled.p`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  color: ${theme.colors.primary};
`;
