import { FC, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import ReactPortal from "../ReactPortal";
import { ModalContainer, ModalOverlay } from "./style";

interface IProps {
  isOpen: boolean;
  children: ReactNode | ReactNode[];
}

const Modal: FC<IProps> = ({ isOpen, children }) => {
  const nodeRef = useRef(null);

  return (
    <>
      <ReactPortal wrapperId="react-portal-modal-container">
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 0, exit: 300 }}
          unmountOnExit
          mountOnEnter
          classNames="modal"
          nodeRef={nodeRef}
        >
          <>
            <ModalOverlay />
            <ModalContainer ref={nodeRef}>{children}</ModalContainer>
          </>
        </CSSTransition>
      </ReactPortal>
    </>
  );
};

export default Modal;
