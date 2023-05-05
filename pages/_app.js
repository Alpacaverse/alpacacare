import "../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AlpacaCare</title>
        <meta
          name="description"
          content="AlpacaCare is a platform that cares for mother's all around."
          key="desc"
        />
        <meta property="og:title" content="AlpacaCare | Care For Mothers" />
        <meta
          property="og:description"
          content="AlpacaCare is a platform that cares for mother's all around."
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
