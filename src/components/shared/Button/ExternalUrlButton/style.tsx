import styled from "styled-components";
import theme from "@/styles/theme";

export const ExternalUrlButtonContainer = styled.a<{
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
