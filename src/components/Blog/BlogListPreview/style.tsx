import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogListPreviewWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: center;
  justify-content: center;

  margin: 24px 0;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    margin: 48px 0;
  }
`;

export const BlogListPreviewContainer = styled.div`
  width: calc(100% - 48px);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 0;
    width: 70%;
    max-width: 800px;
  }
`;

export const BlogListPreviewTitle = styled.p`
  width: calc(100% - 48px);
  position: relative;
  padding-left: 18px;
  text-align: flex-start;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 70%;
    max-width: 800px;
  }
`;

export const BlogListPreviewSeeMore = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  font-size: 12px;
  color: ${theme.colors.primary};
`;
