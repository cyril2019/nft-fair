import React, { useEffect, useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { useToast, Button } from '@chakra-ui/react';
import { ThirdwebSDK } from '@3rdweb/sdk';
export default function Claim() {
  const { address, provider, chainId } = useWeb3();
  const [sdk, setSDK] = useState();
  const toast = useToast();

  useEffect(() => {
    setupSDK();
  }, [, provider]);

  const setupSDK = async () => {
    const newSDK =
      provider !== undefined ? new ThirdwebSDK(provider.getSigner(address)) : new ThirdwebSDK();
    setSDK(newSDK);
  };

  const claimNFT = async () => {
    if (address === undefined || chainId === undefined || chainId !== 4) {
      toast({
        title: 'Error',
        description: 'Error occured while claiming NFT',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }
    const bundleAddress = '0xF04F9Ec03a8d0A7DA309951F5E616F8540C58D94';
    const bundle = sdk.getBundleDropModule(bundleAddress);

    const quantity = 1;

    const tokenId = '0';

    try {
      const data = await bundle.claimTo(tokenId, quantity, address);
      console.log(data);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Error occured while minting NFT',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <Button
        as="a"
        backgroundColor="#915bff"
        border="1px solid #915bff"
        _hover={{
          backgroundColor: '#000',
          border: '1px solid #915bff',
          color: 'white',
        }}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={{ base: 'full', sm: 'auto' }}
        mb={{ base: 2, sm: 0 }}
        size="lg"
        cursor="pointer"
        onClick={claimNFT}
      >
        Claim premium NFT
      </Button>
    </div>
  );
}
