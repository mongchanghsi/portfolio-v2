import { useCallback, useEffect, useState } from "react";

export const getDocumentHeight = (): number => document.body.scrollHeight;
export const getScrollPosition = (window: Window): number => window.scrollY;

const useScrollPosition = () => {
  const [pagePositionInPercentage, setPagePositionInPercentage] =
    useState<number>(0);

  const handleScroll = useCallback(
    () =>
      setPagePositionInPercentage(
        window ? getScrollPosition(window) / getDocumentHeight() : 0
      ),
    []
  );

  useEffect(() => {
    window.addEventListener(`resize`, handleScroll);
    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`resize`, handleScroll);
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return {
    pagePositionInPercentage,
  };
};

export default useScrollPosition;
