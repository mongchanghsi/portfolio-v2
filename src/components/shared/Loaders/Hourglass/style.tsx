import styled, { keyframes } from "styled-components";

const TiltingAnimation = keyframes`
  90% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`;

const TopHourglassAnimation = keyframes`
  90% { transform: scale(0); }
  100% { transform: scale(0);}
`;

const BottomHourglassAnimation = keyframes`
  10% { transform: scale(0); }
  90% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const LineAnimation = keyframes`
  10% { height: 20px; }
  100% { height: 20px; }
`;

export const HourglassContainer = styled.div`
  animation: ${TiltingAnimation} 5s cubic-bezier(0.8, 0, 0.2, 1) infinite;
  height: 40px;
  width: 41px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`;

export const HourglassTop = styled.div`
  animation: ${TopHourglassAnimation} 5s linear infinite;
  border-top: 20px solid #fff;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  height: 0px;
  width: 1px;
  transform-origin: 50% 100%;
`;

export const HourglassBottom = styled.div`
  animation: ${BottomHourglassAnimation} 5s linear infinite;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #fff;
  border-left: 20px solid transparent;
  height: 0px;
  width: 1px;
  transform: scale(0);
  transform-origin: 50% 100%;
`;

export const HourglassLine = styled.div`
  animation: ${LineAnimation} 5s linear infinite;
  border-left: 1px dotted #fff;
  height: 0px;
  width: 0px;
  position: absolute;
  top: 20px;
  left: 20px;
`;
