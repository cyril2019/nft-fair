import React, { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Avatar, Button, chakra, Spinner } from '@chakra-ui/react';
import ItemTile from './Components/ItemTile';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks';
import Link from 'next/link';
export default function Profile() {
  const { address } = useWeb3();
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState([]);
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
  return loading ? (
    <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
      <Spinner className="m-2 text-light-purple" />
      <p>{`Fetching Data..   `}</p>
    </div>
  ) : (
    <div className=" flex flex-col w-full h-screen bg-black">
      <Navbar />
      <Flex direction="column" style={{ padding: 20, marginTop: 25 }}>
        <div className="px-10 mb-16 self-center flex flex-col items-center">
          <Avatar size="2xl" src={`https://gradient-avatar.glitch.me/${address}`} />

          <p className="mt-5 text-xl">{address}</p>
        </div>
        <div className="grid gap-5 p-2  sm:grid-cols-3 lg:grid-cols-4 justify-items-center ">
          {nfts.map((nft) => (
            <ItemTile id={nft.id} image={nft.image} name={nft.name} />
          ))}
        </div>
      </Flex>
    </div>
  );
}
