import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [4];
  const connectors = {
    injected: {},
  };

  return (
    <ChakraProvider>
      <ThirdwebWeb3Provider 
        connectors={connectors} 
        supportedChainIds={supportedChainIds}
      >
      <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
