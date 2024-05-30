import { Toaster } from "react-hot-toast";

import BaseFont from "@/styles/font";
import GlobalStyle from "@/styles/GlobalStyles";
import Layout from "@/components/shared/Layout";
import type { AppProps } from "next/app";

import "react-loading-skeleton/dist/skeleton.css";
import CustomCursor from "@/components/shared/Cursor";
import Template from "./template";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${BaseFont.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Toaster position="bottom-right" reverseOrder={false} />
      <CustomCursor />

      <Layout>
        <Template>
          {/* key={routeParam} */}
          <Component {...pageProps} />
        </Template>
      </Layout>
    </>
  );
}
