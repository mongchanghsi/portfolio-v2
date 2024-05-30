import theme from "@/styles/theme";
import styled from "styled-components";

export const DescriptionText = styled.p`
  color: ${theme.colors.primary};
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 24px;
    line-height: 32px;
  }
`;
