import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginProvider } from '../src/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LoginProvider>
        <Component {...pageProps} />
      </LoginProvider>
    </ChakraProvider>
  );
}

export default MyApp;
