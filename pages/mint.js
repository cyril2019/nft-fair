import React, { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
import { useWeb3 } from '@3rdweb/hooks';
import { FiXCircle } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import Link from 'next/link';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Head from 'next/head';

const MINT_STAGES = ['Adding the NFT to the blockchain', 'Putting the token on the marketplace'];

export default function MintPage() {

  const { nftimage } = useAddressContext();
  const { address, provider, chainId } = useWeb3();
  const [mintStage, setMintStage] = useState(-1);
  const [errorStage, setErrorStage] = useState(-1);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { width, height } = useWindowSize();
  const [sdk, setSDK] = useState();
  const toast = useToast();
  const [price, setPrice] = useState();

  useEffect(() => {
    setUpSDK();
  }, [provider]);

  const setUpSDK = async () => {
    const newSDK =
      provider !== undefined ? new ThirdwebSDK(provider.getSigner(address)) : new ThirdwebSDK();
    setSDK(newSDK);
  };
  // basic-form-check
  const checkForm = () => {
    if (!name?.trim()) return false;
    if (!description?.trim()) return false;
    if (price === '' || price.indexOf('-') > -1) return false;
    return true;
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const mint = async () => {
    if (checkForm() === false) {
      toast({
        title: 'Details not complete',
        description: 'Enter the details carefully',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }

    if (provider === undefined || chainId === undefined || chainId !== 4) {
      toast({
        title: 'Connect Wallet',
        description: 'Connect your wallet and switch to Rinkeby network',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }
    setMintStage(0);
    const account = address;
    const mintData = await fetch('/api/mintTo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ account, nftimage, name, description }),
    });

    const data = await mintData.json();
    if (data.error === true) {
      setErrorStage(0);
      toast({
        title: 'Error',
        description: 'Error occured while minting NFT',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }
    setMintStage(1);

    const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';

    const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';

    try {
      const market = sdk.getMarketplaceModule(marketAddress);
      const listData = await market.createDirectListing({
        assetContractAddress: nftCollectionAddress,
        buyoutPricePerToken: ethers.utils.parseEther(price, 18),
        currencyContractAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        listingDurationInSeconds: 60 * 60 * 24,
        quantity: 1,
        startTimeInSeconds: 0,
        tokenId: data.id,
      });
    } catch (err) {
      setErrorStage(1);
      toast({
        title: 'Error',
        description: 'Error occured while listing NFT',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }
    setMintStage(2);
  };

  const Minting = () => (
    <>
      <div className="flex min-h-screen w-full text-white p-5 justify-center items-center">
        <div className=" space-y-4 p-10 bg-gray rounded-lg ">
          <div className="space-y-2">
            <h2 className="text-2xl">Minting...</h2>
            <p className="text-sm leading-relaxed text-gray-600">Your NFT is being minted!</p>
            <p className="text-sm leading-relaxed text-gray-600">This may take a while :)</p>
          </div>

          <div className="space-y-5">
            {MINT_STAGES.map((label, step) => {
              if (errorStage === step) {
                return (
                  <div key={step} className="flex items-center gap-2">
                    <FiXCircle className="w-6 h-6 text-red" />
                    <span className="leading-relaxed text-red">{label}</span>
                  </div>
                );
              }
              if (mintStage > step) {
                return (
                  <div key={step} className="flex items-center gap-2">
                    <BiCheckCircle className="w-6 h-6 text-green" />
                    <span className="leading-relaxed text-green">{label}</span>
                  </div>
                );
              }
              if (mintStage === step) {
                return (
                  <div key={step} className="flex items-center gap-2">
                    <Spinner className="w-5 h-5 text-light-purple" />
                    <span className="leading-relaxed">{label}...</span>
                  </div>
                );
              }
              return (
                <div key={step} className="flex items-center gap-2">
                  <Spinner className="w-5 h-5 text-light-purple" />
                  <span className="leading-relaxed">{label}...</span>
                </div>
              );
            })}
          </div>
        </div>

        {errorStage !== -1 ? (
          <Link href="/create" passHref>
            <Button
              as="a"
              backgroundColor="#915bff"
              border="1px solid #915bff"
              _hover={{
                backgroundColor: '#000',
                border: '1px solid #915bff',
                color: 'white',
              }}
              alignItems="center"
              justifyContent="center"
              mb={{ base: 2, sm: 0 }}
              cursor="pointer"
            >
              Go back to Create
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );

  const Minted = () => (
    <div className="flex  min-h-screen w-full text-white justify-center items-center">
      <div className=" space-y-4 p-10 bg-gray rounded-lg">
        <div className="space-y-2">
          <h2 className="text-2xl">Minted! 🎉</h2>
          <p className="text-sm leading-relaxed text-gray-600">Yayy! Your NFT has been minted.</p>
        </div>
        <div className="space-y-5">
          {MINT_STAGES.map((label, step) => (
            <div key={step} className="flex items-center gap-2">
              <BiCheckCircle className="w-6 h-6 text-green" />
              <span className="leading-relaxed text-green">{label}</span>
            </div>
          ))}
        </div>
        <div className=" gap-3 pt-5">
          <Link href="/marketplace" passHref>
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
            >
              Go to Marketplace
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-col w-full h-full bg-black">
      <Head>
        <title>Mint NFT</title>
      </Head>
      <Navbar />
      {mintStage === MINT_STAGES.length && <Confetti className="w-full h-screen" recycle={true} />}
      {nftimage === 'sd' ? (
        <div className="text-white w-full h-full flex items-center justify-center bg-black">
          <p className="text-2xl">Create a pixel art to mint!</p>
        </div>
      ) : mintStage === MINT_STAGES.length ? (
        <div className="flex w-full items-center">
          <Minted />
        </div>
      ) : mintStage >= 0 ? (
        <div className="flex items-center">
          <Minting />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row flex-grow items-center">
          <Flex p={8} flex={1} align={'center'} justify={'center'} className="text-white">
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>{`Let's setup your NFT's name and price!`}</Heading>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={handleNameChange} />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Input type="text" value={description} onChange={handleDescChange} />
              </FormControl>
              <FormControl id="price" isRequired>
                <FormLabel>Price</FormLabel>
                <Input type="number" value={price} onChange={handlePriceChange} />
              </FormControl>
              <Stack spacing={20}>
                <button
                  className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black hover:text-white"
                  onClick={mint}
                >
                  Mint NFT
                </button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <div className="overflow-auto transform scale-75 border border-gray-200 shadow-xl rounded-xl">
              <Image src={nftimage} alt="NFT Image" />
            </div>
          </Flex>
        </div>
      )}
    </div>
  );
}
