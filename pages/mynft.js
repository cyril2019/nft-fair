import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import NFTTile from './Components/NFTTile';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import Footer from './Components/Footer';
export default function Profile() {
  const { address } = useWeb3();
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState([]);
  const router = useRouter();
  const { game, handleGame } = useAddressContext();
  useEffect(() => {
    console.log(address);
    getMyNFT(address);
  }, []);

  const getMyNFT = async (address) => {
    const listing = await fetch(`/api/user/${address}`, {
      method: 'GET',
    });
    const data = await listing.json();
    setNFTs(data);
    setLoading(false);
  };

  return (
    <div className="w-full">
      <Navbar />

      {loading ? (
        <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching Data..   `}</p>
        </div>
      ) : (
        <div className=" flex flex-col w-full min-h-screen bg-black">
          <div className="w-full sm:w-8/12 p-5 space-y-3 -translate-y-28 sm:-translate-y-0">
            <p className="text-white">My collection</p>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {nfts.map((nft) => (
                <NFTTile key={nft.id} id={nft.id} image={nft.image} name={nft.name} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
