import { useRef, useEffect } from "react";
import {
  MainCursor,
  MainCursorBackground,
  SecondaryCursor,
  SecondaryCursorBackground,
} from "./style";
import useWindowDimensions from "@/hooks/common/useWindowDimensions";

/**
 * Source: https://www.youtube.com/watch?v=nvhNp2A3hxI
 */
const CustomCursor = () => {
  const secondaryCursor = useRef<any>(null);
  const mainCursor = useRef<any>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (!mainCursor || !mainCursor.current) return;
      if (!secondaryCursor || !secondaryCursor.current) return;
      if (!positionRef || !positionRef.current) return;

      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      if (!mainCursor || !mainCursor.current) return;
      if (!secondaryCursor || !secondaryCursor.current) return;
      if (!positionRef || !positionRef.current) return;

      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <>
      <MainCursor ref={mainCursor}>
        <MainCursorBackground className="main-cursor-background"></MainCursorBackground>
      </MainCursor>
      <SecondaryCursor className="secondary-cursor" ref={secondaryCursor}>
        <SecondaryCursorBackground className="cursor-background"></SecondaryCursorBackground>
      </SecondaryCursor>
    </>
  );
};

export default CustomCursor;
