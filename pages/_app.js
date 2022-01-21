import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { GridContextProvider } from '../context/canvasContext';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GridContextProvider>
        <Component {...pageProps} />
      </GridContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
