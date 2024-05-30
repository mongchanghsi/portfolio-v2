import { HorizonalLoop } from "@/components/shared/Animation";
import styled from "styled-components";

export const TechnologyStackContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  animation: ${HorizonalLoop} 20s linear infinite;
`;

export const TechnologyStackItem = styled.div`
  position: relative;
  height: 40px;
  aspect-ratio: 1/1;
`;
