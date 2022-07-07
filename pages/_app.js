import React from "react";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
