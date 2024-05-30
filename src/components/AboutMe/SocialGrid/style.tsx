import styled from "styled-components";
import { OneGridStyle } from "../util";
import theme from "@/styles/theme";

export const SocialGridContainer = styled(OneGridStyle)`
  background-color: ${theme.colors.base2};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialGridImage = styled.div`
  position: relative;
  height: 48px;
  aspect-ratio: 1/1;
`;
