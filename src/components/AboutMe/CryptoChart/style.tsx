import theme from "@/styles/theme";
import styled from "styled-components";

export const CryptoContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CryptoPrice = styled.p<{ color?: string }>`
  font-size: 32px;
  color: ${({ color }) => (color ? color : theme.colors.primary)};
  line-height: 45px;
`;

export const CryptoIcon = styled.div`
  position: relative;
  height: 32px;
  aspect-ratio: 1/1;
`;
