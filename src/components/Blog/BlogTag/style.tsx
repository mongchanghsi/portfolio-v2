import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogTagContainer = styled.div`
  // background-color: ${theme.colors.primary};
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 400;
  color: ${theme.colors.highlight};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 10px;
  }
`;
