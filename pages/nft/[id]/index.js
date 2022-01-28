import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { Button, Spinner, Divider } from '@chakra-ui/react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default function Nftpage() {
  const router = useRouter();
  const [nft, setNFT] = useState();
  const [loading, setLoading] = useState(true);
  const { address, provider } = useWeb3();
  const sdk = new ThirdwebSDK(provider.getSigner(address));
  const { id } = router.query;
  useEffect(() => {
    getNFTDetails(id);
  }, []);

  const getNFTDetails = async () => {
    console.log(id);
    const listing = await fetch(`/api/nft/${id}`, {
      method: 'GET',
    });
    const data = await listing.json();
    setNFT(data);
    setLoading(false);
  };

  const buyNFT = async () => {
    const listingId = id;
    const quantityDesired = '1';
    const market = sdk.getMarketplaceModule('0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1');
    console.log(market);
    await market
      .buyoutDirectListing({ listingId, quantityDesired })
      .then((metadata) => {
        console.log(metadata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full h-screen flex flex-col bg-black text-light-gray">
      <Navbar />
      {loading ? (
        <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching Data...   `}</p>
        </div>
      ) : (
        <div className="w-full grow grid grid-cols-1 md:grid-cols-2">
          <div className="p-10">
            <img
              alt="NFT Name"
              className="rounded-lg object-center box-border"
              src={
                nft !== undefined ? nft.asset.image : 'https://gigaland.io/images/items/big-4.jpg'
              }
            />
          </div>
          <div className="flex flex-col items-start px-10 md:px-0 md:ml-10">
            <p className="text-2xl text-white sm:text-5xl md:text-5xl md:mt-10 font-black">
              {nft !== undefined ? nft.asset.name : ''}
            </p>
            <p className="md:w-3/4 w-full mt-10 sm:text-xl">
              {nft !== undefined ? nft.asset.description : ''}
            </p>
            <div className="p-2 mt-5 flex flex-col items-start">
              <p className="text-sm text-white sm:text-lg md:text-sm font-black">Price</p>
              <p className="text-2xl text-white sm:text-2xl md:text-3xl font-black flex mt-4 items-center">
                <FaEthereum className="text-purple mr-2" />
                {nft !== undefined ? nft.buyoutCurrencyValuePerToken.displayValue : ''}
              </p>
            </div>
            <Button
              as="a"
              variant="solid"
              backgroundColor="#915bff"
              border="1px solid #915bff"
              color="#fff"
              _hover={{
                backgroundColor: '#000',
                border: '1px solid #915bff',
              }}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 'full', sm: 'auto' }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              style={{ marginTop: 30 }}
              onClick={buyNFT}
            >
              Buy Now
            </Button>
            <div className="mt-12">
              <p className="text-white text-2xl">Details</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
