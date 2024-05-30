import styled from "styled-components";

export const PreloaderContainer = styled.div<{
  $loading: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;

  background: #121212;
  opacity: ${({ $loading }) => ($loading ? "1" : "0")};
  visibility: ${({ $loading }) => ($loading ? "visible" : "hidden")};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-out;
`;
