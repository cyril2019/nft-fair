import React, { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Avatar, Button, chakra, Spinner } from '@chakra-ui/react';
import ItemTile from '../../Components/ItemTile';
import Navbar from '../../Components/Navbar';
import ProfileCard from '../../Components/ProfileCard';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Footer from '../../Components/Footer';
export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getMyNFT(id);
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
          <p>{`Fetching User Data..   `}</p>
        </div>
      ) : (
        <div className=" flex flex-col w-full min-h-screen bg-black">
          <div className="cover w-full h-44 bg-no-repeat bg-cover bg-center overflow-hidden bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpIpmeRqDUnguJKOlUT4MIT2cWAWcbf-y-w&usqp=CAU')]"></div>
          <div className="w-full sm:flex justify-between">
            <div className="w-full h-max max-w-md mx-auto sm:w-4/12 p-5 -translate-y-28 ">
              <ProfileCard />
            </div>
            <div className="w-full sm:w-8/12 p-5 self-end space-y-3 -translate-y-24">
              <p className="text-white">My collection</p>

              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nfts.map((nft) => (
                  <ItemTile key={nft.id} id={nft.id} image={nft.image} name={nft.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
