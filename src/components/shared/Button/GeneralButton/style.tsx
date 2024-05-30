import styled from "styled-components";
import theme from "@/styles/theme";

export const GeneralButtonContainer = styled.button<{
  notAllowed?: boolean;
}>`
  margin: 0;

  border-radius: 12px;
  background: ${({ notAllowed }) =>
    notAllowed ? "#BABAB9" : theme.colors.base};

  padding: 8px 16px;
  cursor: pointer;
  border: none;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:enabled {
    background: "#ff8c04";
  }
`;

export const GeneralButtonText = styled.p<{ notAllowed?: boolean }>`
  color: ${({ notAllowed }) => (notAllowed ? "#60605F" : theme.colors.primary)};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 2.5px;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 20px;
    line-height: 150%;
  }
`;

export const GeneralButtonIcon = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`;
