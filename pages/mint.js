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
} from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';

export default function MintPage() {
  const { nftimage } = useAddressContext();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
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
    // make a backend server api request to mint an NFT
    if (checkForm() === false) return;
    const account = '0x8C1Bb3819E244F0868440dFc6517AFf16627613B';
    await fetch('/api/mint', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ account, nftimage, name, description }),
    });
  };

  return (
    <div className=" flex flex-col w-full h-screen bg-black">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow items-center">
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Lets setup your NFTs name and price!</Heading>
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
                className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black"
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
    </div>
  );
}
