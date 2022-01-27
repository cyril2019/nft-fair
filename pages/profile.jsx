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
          <div className="cover w-full h-44 bg-no-repeat bg-cover bg-center overflow-hidden bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpIpmeRqDUnguJKOlUT4MIT2cWAWcbf-y-w&usqp=CAU')]"></div>
          <div className="w-full sm:flex justify-between">
            <div className="w-full h-max max-w-md mx-auto sm:w-4/12 p-5 -translate-y-28 ">
              <ProfileCard />
            </div>
            <div className="w-full sm:w-8/12 p-5 self-end space-y-3">
              <p className="text-white">My collection</p>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3">
                <ItemTile />
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
            </div>
          </div>

          {/* <Flex direction="column" style={{ padding: 20, marginTop: 25 }}>
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
            </Flex> */}
        </div>
      )}
    </div>
  );
}
