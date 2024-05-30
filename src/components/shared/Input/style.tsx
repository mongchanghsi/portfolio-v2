import styled from "styled-components";
import theme from "@/styles/theme";

export const InputContainer = styled.input`
  position: relative;
  width: 100%;

  border-radius: 30px;
  background: ${theme.colors.base};
  color: ${theme.colors.primary};

  border-radius: 12px;
  border: none;

  padding: 12px 24px;

  font-size: 24px;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: ${theme.colors.primary};
    opacity: 0.5;
    font-size: 18px;
  }
`;
