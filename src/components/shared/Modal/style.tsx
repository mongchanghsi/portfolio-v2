import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 900;
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(50px);
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 901;
  left: 50%;
  top: 50%;

  transition: all 0.5s ease;
  transform: scale(0.9) translate(-50%, -50%);
  transform-origin: top left;

  &.modal {
    opacity: 0;
    pointer-events: none;
  }

  &.modal-enter-done {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1) translate(-50%, -50%);
  }

  &.modal-exit {
    opacity: 0;
    transform: scale(0.9) translate(-50%, -50%);
  }
`;
