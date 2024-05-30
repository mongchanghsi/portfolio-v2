import theme from "@/styles/theme";
import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: ${theme.colors.secondary};
`;
