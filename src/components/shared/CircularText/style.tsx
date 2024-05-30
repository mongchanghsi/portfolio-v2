import theme from "@/styles/theme";
import styled from "styled-components";
import { CircularLoop } from "../Animation";

export const CircleTextContainer = styled.div<{ size: number }>`
  position: relative;
  height: ${({ size }) => (size ? `${size}px` : `100px`)};
  aspect-ratio: 1/1;

  background: transparent;
`;

export const CircleTextContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  animation: ${CircularLoop} 10s linear infinite;
`;

export const CircleTextLabel = styled.span<{ size: number; fontSize: number }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: ${({ size }) => (size ? `0 ${size / 2}px` : `0 50px`)};
  color: ${theme.colors.highlight};
  font-size: 12px;
  font-size: ${({ fontSize }) => fontSize ?? `12px`};
`;
