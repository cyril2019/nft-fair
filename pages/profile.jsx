import React, { useEffect, useState } from 'react';
import ProfileCard from './Components/ProfileCard';
import { Flex, SimpleGrid, Avatar, Button, chakra, Spinner } from '@chakra-ui/react';
import ItemTile from './Components/ItemTile';
import Navbar from './Components/Navbar';
import { useAddressContext } from '../context/addressContext';
export default function Profile() {
  const [loading, setLoading] = useState(true);
  const { walletaddress } = useAddressContext();
  useEffect(() => {
    getMyNFT();
  }, []);

  const getMyNFT = async () => {
    const listing = await fetch('/api/getnft', {
      method: 'GET',
    });
    const data = await listing.json();
    console.log(data);
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
          <Avatar size="2xl" src={`https://gradient-avatar.glitch.me/${walletaddress}`} />

          <p className="mt-5 text-xl">{walletaddress}</p>
        </div>
        <div className="grid gap-5 p-2  sm:grid-cols-3 lg:grid-cols-4 justify-items-center ">
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
          <ItemTile />
        </div>
      </Flex>
    </div>
  );
}
