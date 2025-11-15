import theme from "@/styles/theme";
import styled from "styled-components";

export const ExperienceWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: center;
  justify-content: center;

  margin: 24px 0;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    // height: 100vh; /* old browsers */
    // height: 100dvh; /* new browsers */
    margin: 48px 0;
  }
`;

export const ExperienceContainer = styled.div`
  width: calc(100% - 48px);
  border-radius: 12px;
  background: ${theme.colors.base2};

  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    height: 320px;
    flex-direction: row;
    padding: 0;
    width: 70%;
    max-width: 800px;
  }
`;

export const ExperienceSelection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.base2};
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 30%;
    flex-direction: column;
  }
`;

export const ExperienceSelectionItem = styled.div<{ selected: boolean }>`
  position: relative;
  width: 100%;
  padding: 18px;

  color: ${({ selected }) =>
    selected ? theme.colors.highlight : theme.colors.secondary};
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.base};
    color: ${theme.colors.highlight};
  }
`;

export const ExperienceContent = styled.div`
  position: relative;
  flex: 1;
  padding: 18px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;

  padding-right: 22px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.base2};
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }
`;

export const ExperienceContentTitleContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ExperienceContentTitleLabel = styled.p`
  color: ${theme.colors.primary};
  font-size: 14px;

  & span {
    font-size: 18px;
    color: ${theme.colors.highlight};
  }
`;

export const ExperienceContentDivider = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  background: ${theme.colors.secondary};
`;

export const ExperienceContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ExperienceContentDescriptionItem = styled.p`
  color: ${theme.colors.primary};
  font-size: 14px;
`;

export const ExperienceTitle = styled.p`
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
