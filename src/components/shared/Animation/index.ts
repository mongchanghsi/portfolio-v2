import { keyframes } from "styled-components";

export const HorizonalLoop = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(-100%); }
`;

export const CircularLoop = keyframes`
 0% {transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

export const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const FadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;
