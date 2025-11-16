import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogNavigationBarContainer = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 16px 48px;
  }
`;

export const BlogNavigationBarLogo = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 48px;
    height: 48px;
  }
`;

export const BlogNavigationBarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BlogNavigationBarLink = styled.p`
  color: ${theme.colors.primary};
  font-size: 12px;
  transition: color 0.2s ease-in-out;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 16px;
  }

  &:hover {
    color: ${theme.colors.highlight};
    transition: color 0.2s ease-in-out;
  }
`;
