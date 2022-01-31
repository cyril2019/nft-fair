import React, { useEffect, useState } from 'react';
import { Spinner, Button, useToast } from '@chakra-ui/react';
import NFTTile from './Components/NFTTile';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import Footer from './Components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Profile() {
  const { address } = useWeb3();
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState([]);
  const toast = useToast();
  useEffect(() => {
    getMyNFT(address);
  }, [, address]);

  const getMyNFT = async (address) => {
    if (address === undefined || address === null) {
      toast({
        title: 'Connect wallet',
        description: 'Connect wallet and switch to Rinkeby network',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      setLoading(false);
      return;
    }
    const listing = await fetch(`/api/user/${address}`, {
      method: 'GET',
    });
    const data = await listing.json();
    if (data.error === true) {
      toast({
        title: 'Error',
        description: 'Error occured while fetching NFT',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      setLoading(false);
      return;
    }
    setNFTs(data);
    setLoading(false);
  };

  return (
    <div className="w-full bg-black">
      <Head>
        <title>My NFT Collection</title>
      </Head>
      <Navbar />

      {loading ? (
        <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching Data..   `}</p>
        </div>
      ) : (
        <div className=" flex flex-col w-full min-h-screen  mt-28 sm:mt-0">
          <div className="w-full p-5 space-y-3 -translate-y-28 sm:-translate-y-0">
            <p className="text-white text-3xl">My collection</p>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {nfts.map((nft) => (
                <NFTTile key={nft.id} id={nft.id} image={nft.image} name={nft.name} />
              ))}
            </div>
            {nfts.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-between mt-12">
                <p className="text-white text-3xl text-center w-full mb-10">
                  No NFT's found in your wallet
                </p>
                <Link passHref href="/wrong_side">
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
                    Play game using default NFT
                  </Button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
