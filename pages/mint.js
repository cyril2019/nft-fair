import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Spinner,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
import { useWeb3 } from '@3rdweb/hooks';

import { FiXCircle } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers, providers } from 'ethers';

const MINT_STAGES = [
  'Uploading your NFT and its metadata',
  'Adding the NFT to the blockchain',
  // "Putting the token on the marketplace",
  // "Updating token on database",
];
const errorStage = 2;

export default function MintPage() {

  const { nftimage } = useAddressContext();
  const { address, provider } = useWeb3();
  const [mintStage, setMintStage] = useState(-1);
  const [errorStage, setErrorStage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);

  const sdk = new ThirdwebSDK(provider.getSigner(address));
  useEffect(() => {
    console.log(nftimage);
  }, []);

  // basic-form-check
  const checkForm = () => {
    if (name === '') return false;
    if (description === '') return false;

    return true;
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescChange = (e) => setDescription(e.target.value);
  const mint = async () => {
    if (checkForm() === false) return;

    setMintStage(0);
    const account = address;
    // setLoading(true);
    const mintData = await fetch('/api/mint', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ account, nftimage, name, description }),
    });
    if (!mintData) {
      setErrorStage(0);
      return;
    }
    const data = await mintData.json();
    setMintStage(1);

    const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';

    const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';

    try {
      const market = sdk.getMarketplaceModule(marketAddress);
      console.log(data);
      const listData = await market.createDirectListing({
        assetContractAddress: nftCollectionAddress,
        buyoutPricePerToken: ethers.utils.parseUnits('0.000002'),
        currencyContractAddress: '0x0000000000000000000000000000000000000000', // have also used '0xEeee....'
        listingDurationInSeconds: 60 * 60 * 24,
        quantity: 1,
        startTimeInSeconds: Math.floor(Date.now() / 1000),
        tokenId: data.id,
      });

      console.log(listData);
    } catch (err) {
      setErrorStage(1);
      return;
    }
    setMintStage(2);
  };

  const Minting = () => (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl">Minting...</h2>
        <p className="text-sm leading-relaxed text-gray-600">Your NFT is being minted!</p>
      </div>
      <div className="space-y-5">
        {MINT_STAGES.map((label, step) => {
          if (errorStage === step) {
            return (
              <div key={step} className="flex items-center gap-2">
                <FiXCircle className="w-6 h-6 text-red-300" />
                <span className="leading-relaxed text-red-700">{label}</span>
              </div>
            );
          }
          if (mintStage > step) {
            return (
              <div key={step} className="flex items-center gap-2">
                <BiCheckCircle className="w-6 h-6 text-green-300" />
                <span className="leading-relaxed text-green-700">{label}</span>
              </div>
            );
          }
          if (mintStage === step) {
            return (
              <div key={step} className="flex items-center gap-2">
                <Spinner className="w-5 h-5 text-gray-400" />
                <span className="leading-relaxed text-gray-700">{label}...</span>
              </div>
            );
          }
          return (
            <div key={step} className="flex items-center gap-2">
              <Spinner className="w-5 h-5 text-gray-100" />
              <span className="leading-relaxed text-gray-400">{label}...</span>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div className=" flex flex-col w-full h-full bg-black">
      <Navbar />
      {nftimage === '' ? (
        <div className="text-white w-full h-full flex items-center justify-center bg-black">
          <p className="text-2xl">Create a pixel art to mint!</p>
        </div>
      ) : mintStage >= 0 ? (
        <Minting />
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
              <Image
                src={nftimage}
                // src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Dan Abramov"
              />
            </div>
          </Flex>
        </div>
      )}
    </div>
  );
}
