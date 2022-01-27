import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { Button, Spinner, Divider } from '@chakra-ui/react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';

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
        <div className="w-full grow grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div className="p-10 w-full md:w-9/12">
            <img
              alt="NFT Name"
              className="rounded-lg object-center box-border"
              src={
                nft !== undefined ? nft.asset.image : 'https://gigaland.io/images/items/big-4.jpg'
              }
            />
          </div>
          <div className=" p-10 mb-10 w-full md:w-fit">
            <div className="flex flex-col items-start space-y-2 bg-gray rounded-md p-5 md:p-10">
              <p className="text-3xl font-extrabold text-white">
                {nft !== undefined ? nft.asset.name : ''}
              </p>
              <p className="">
                The description comes here{nft !== undefined ? nft.asset.description : ''}
              </p>
              <div className="flex flex-col items-start">
                <p className="text-xl font-bold text-purple">Price</p>
                <p className="text-2xl text-white sm:text-2xl md:text-3xl font-black flex mt-1 items-center">
                  {nft !== undefined ? nft.buyoutCurrencyValuePerToken.displayValue : ''}
                  <FaEthereum className="text-purple ml-2" />
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
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
