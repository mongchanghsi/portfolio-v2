import Meta from "@/components/shared/MetaData";
import Navigation from "@/components/shared/Navigation";
import Preloader from "@/components/shared/Preloader";
import { LayoutContainer, LayoutContent } from "./style";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  // const [pageLoadProgress, setPageLoadProgress] = useState(0);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     console.log("load is calling");
  //     setLoading(false);
  //   };

  //   setTimeout(handleLoad, 3000); // Back up if load event is not fired

  //   // const calculatePageLoadProgress = () => {
  //   //   const resources = window.performance.getEntriesByType("resource");
  //   //   let totalSize = 0;
  //   //   let loadedSize = 0;

  //   //   resources.forEach((resource) => {
  //   //     if (
  //   //       resource.transferSize !== undefined &&
  //   //       !isNaN(resource.transferSize)
  //   //     ) {
  //   //       totalSize += resource.transferSize;
  //   //       loadedSize += resource.transferSize;
  //   //     }
  //   //   });

  //   //   if (totalSize && loadedSize) {
  //   //     const progress = Math.floor((loadedSize / totalSize) * 100);
  //   //     setPageLoadProgress(progress);
  //   //   }
  //   // };

  //   // window.addEventListener("load", calculatePageLoadProgress);

  //   // Listen for the 'load' event on the window object
  //   window.addEventListener("load", handleLoad);

  //   // Remove the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  return (
    <>
      <Meta />
      {/* <Navigation /> */}
      <Preloader loading={loading} />

      <LayoutContainer>
        <LayoutContent>{children}</LayoutContent>
      </LayoutContainer>
    </>
  );
};
export default Layout;
