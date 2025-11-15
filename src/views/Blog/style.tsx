import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  padding: 16px 24px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 24px 48px;
  }
`;

export const BlogPostTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 24px;
  }
`;

export const BlogPostBody = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.primary};
  opacity: 80%;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 16px;
  }

  line-height: 1.6;

  /* Optional: style lists, pre tags, bold/italic, etc */
  ul {
    padding-left: 20px;
    list-style: disc;
  }

  a {
    color: ${theme.colors.highlight};
  }

  pre {
    background: #1e1e1e;
    color: #f5f5f5;
    padding: 12px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 14px;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
`;

export const BlogPostAuthor = styled.p`
  color: ${theme.colors.primary};
  opacity: 80%;
  font-size: 8px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 12px;
  }
`;
