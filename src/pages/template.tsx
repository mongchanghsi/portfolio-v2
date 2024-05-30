"use client";

import theme from "@/styles/theme";
import { ReactNode, useEffect } from "react";
import styled, { css } from "styled-components";

import {
  Banners,
  animatePageIn,
  getRandomBackSplash,
  getRandomBackSplashPath,
} from "@/components/shared/Animation/Page/MultiBanners";

const BannerContainer = styled.div<{ left: number; imagePath: string }>`
  position: fixed;
  top: 0;
  left: ${({ left }) => (left ? `${left}vw` : `0px`)};
  width: 25vw;
  z-index: 10;
  min-height: 100vh;
  background: ${theme.colors.base2};

  ${({ left, imagePath }) =>
    imagePath
      ? css`
          @media screen and (max-width: ${theme.breakpoints.large}) {
            background-image: url(${imagePath});
            background-size: 400% 100%;
            background-position: -${(left / 25) * 100}% 0;
          }
        `
      : ``}
`;

const backsplashPath = getRandomBackSplashPath();

const Template = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    animatePageIn();
  }, [children]);

  return (
    <>
      {Banners.map((_banner) => (
        <BannerContainer
          id={_banner.id}
          left={_banner.position * 25}
          imagePath={backsplashPath}
        />
      ))}
      {children}
    </>
  );
};

export default Template;
