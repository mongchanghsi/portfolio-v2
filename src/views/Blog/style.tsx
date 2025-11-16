import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  padding: 0 24px 16px 24px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 0 48px 24px 48px;
  }
`;

export const BlogPostTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 24px;
  }
`;

export const BlogPostBody = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.secondary};

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

export const BlogCardCategories = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BlogHeroImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2.4;
  border-radius: 24px;
  overflow: hidden;
`;
