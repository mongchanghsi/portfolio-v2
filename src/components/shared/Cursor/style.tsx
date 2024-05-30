import theme from "@/styles/theme";
import styled from "styled-components";
import { FadeIn, FadeOut } from "../Animation";

export const CursorBase = styled.div`
  z-index: 10000;

  pointer-events: none;
  transform: translate3d(0, 0, 0);
  position: fixed;
  display: none;

  @media screen and (min-width: ${theme.breakpoints.large} && hover: none) {
    display: block;
  }
`;

export const MainCursor = styled(CursorBase)`
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: ${FadeIn} 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;
`;

export const MainCursorBackground = styled.div`
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
`;

export const SecondaryCursor = styled(CursorBase)`
  width: 48px;
  height: 48px;
`;

export const SecondaryCursorBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${theme.colors.highlight};
  position: relative;

  &:before {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: ${FadeOut} 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    left: 10px;
  }

  &:after {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: white;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: ${FadeOut} 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    right: 10px;
  }
`;
