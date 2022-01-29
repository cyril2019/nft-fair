import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { AddressContextProvider } from '../context/addressContext';
import '@fontsource/inter/400.css';
function MyApp({ Component, pageProps }) {
  const supportedChainIds = [1, 4, 80001];
  const connectors = {
    injected: {},
  };

  const theme = extendTheme({
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainIds}>
        <AddressContextProvider>
          <Component {...pageProps} />
        </AddressContextProvider>
      </ThirdwebWeb3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
