import theme from "@/styles/theme";
import styled from "styled-components";

export const BlogCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;

  padding: 16px 24px;
  border-radius: 12px;
  background: ${theme.colors.base2};

  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;

export const BlogCardTitle = styled.h3`
  text-align: flex-start;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.primary};
`;

export const BlogCardDescription = styled.p`
  text-align: flex-start;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.secondary};
`;
