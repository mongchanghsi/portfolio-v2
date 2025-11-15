import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogCategoryContainer = styled.div`
  // background-color: ${theme.colors.primary};
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${theme.colors.highlight};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 14px;
  }
`;
