//= React
import { useEffect } from 'react';
import Head from "next/head";
import Script from 'next/script';
//= Components
import PreLoader from "@components/PreLoader";
import ScrollToTop from "@components/ScrollToTop";

const MainLayout = ({ children, scrollTopText }) => {
  return (
    <>
      <Head>
        <title>It ItInnovation</title>
      </Head>

      <PreLoader />
      { children }
      <ScrollToTop topText={scrollTopText} />
    </>
  );
};

export default MainLayout;
