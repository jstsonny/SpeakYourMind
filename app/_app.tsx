import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import QueryWrapper from './auth/QueryWrapper';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryWrapper>
        <Component {...pageProps} />
      </QueryWrapper>
    </SessionProvider>
  );
}

export default MyApp;