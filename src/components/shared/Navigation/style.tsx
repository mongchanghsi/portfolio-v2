import theme from "@/styles/theme";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: absolute;
  top: 50vh;
  left: 60px;
  transform: translateY(-50%);
  z-index: 999;
`;

export const NavigationSelection = styled.div``;

export const NavigationSelected = styled.div<{ top: number }>`
  position: absolute;
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #121212;

  top: ${({ top }) => `${top}px`};
  left: 10px;

  transition: 0.3s ease-out;
`;

export const NavigationContent = styled.div`
  background-color: #383c3d;
  width: 60px;
  border-radius: 60px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const NavigationItem = styled.div`
  position: relative;
  width: 40px;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: transparent;

  &:hover {
    background-color: #121212;
  }
`;

export const NavigationItemIcon = styled.div`
  position: relative;
  width: 24px;
  aspect-ratio: 1/1;
`;
