import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { AddressContextProvider } from '../context/addressContext';

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [4];
  const connectors = {
    injected: {},
  };

  return (
    <ChakraProvider>
      <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainIds}>
        <AddressContextProvider>
          <Component {...pageProps} />
        </AddressContextProvider>
      </ThirdwebWeb3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
