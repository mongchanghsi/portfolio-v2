import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

// React Portal Tutorial - https://blog.logrocket.com/build-modal-with-react-portals/#what-components-building
const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId = "react-portal-wrapper",
}: {
  children: React.ReactNode | React.ReactNode[];
  wrapperId: string;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let container = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!container) {
      systemCreated = true;
      container = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(container);

    return () => {
      if (systemCreated && container?.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
