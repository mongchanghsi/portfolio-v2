import theme from "@/styles/theme";
import styled from "styled-components";

export const ExperienceContainer = styled.div`
  width: 100%;
`;

export const ExperienceWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const ExperienceContent = styled.div`
  display: flex;
  width: 300vw;
`;

export const ExperienceSection = styled.section`
  width: 100vw;
  height: 100vh; /* old browsers */
  height: 100dvh; /* new browsers */
  padding: calc(80px + 48px) 24px;
  display: flex;
  flex-direction: column;

  gap: 18px;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: calc(200px + 150px) 50px;
    gap: 32px;
  }
`;

export const ExperienceSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ExperienceSectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 38px;
  }
`;

export const ExperienceSectionTitleSpan = styled.span`
  color: ${theme.colors.highlight};
`;

export const ExperienceSectionDuration = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: ${theme.colors.secondary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 18px;
  }
`;

export const ExperienceSectionDescription = styled.ul`
  width: 80%;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 50%;
  }
`;

export const ExperienceSectionDescriptionText = styled.li`
  margin: 8px 0;
  font-size: 16px;
  color: ${theme.colors.secondary};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 24px;
  }
`;

export const ExperienceSectionViewMore = styled.button`
  position: absolute;
  right: 240px;
  bottom: 120px;

  padding: 12px 24px;
  border: 0;
  background: ${theme.colors.base2};
  color: ${theme.colors.primary};
  font-size: 24px;
  border-radius: 24px;

  & span {
    color: ${theme.colors.highlight};
  }
`;
