import React, { useEffect, useState } from 'react';
import { useToast, Spinner } from '@chakra-ui/react';
import ItemTile from '../../Components/ItemTile';
import Navbar from '../../Components/Navbar';
import ProfileCard from '../../Components/ProfileCard';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../Components/Footer';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState([]);
  const router = useRouter();
  const [error, setError] = useState(false);
  const { id } = router.query;
  const toast = useToast();
  useEffect(() => {
    getMyNFT(id);
  }, []);

  const getMyNFT = async (address) => {
    const listing = await fetch(`/api/user/${address}`, {
      method: 'GET',
    });
    const data = await listing.json();
    if (data.error === true) {
      toast({
        title: 'Error',
        description: 'Error occured while fetching details',
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
    <div className="w-full">
      <Head>
        <title>User Profile</title>
      </Head>
      <Navbar />

      {loading ? (
        <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching User Data..   `}</p>
        </div>
      ) : (
        <div className=" flex flex-col w-full min-h-screen bg-black">
          <div className="cover w-full h-44 bg-no-repeat bg-cover bg-center overflow-hidden bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpIpmeRqDUnguJKOlUT4MIT2cWAWcbf-y-w&usqp=CAU')]"></div>
          <div className="w-full md:flex justify-between">
            <div className="w-full h-max max-w-md mx-auto md:w-4/12 p-5 -translate-y-28 ">
              <ProfileCard address={id} />
            </div>
            <div className="w-full md:w-8/12 p-5 space-y-3 -translate-y-28 md:-translate-y-0">
              <p className="text-white">User's collection</p>

              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {nfts.length !== 0 ? (
                  nfts.map((nft) => (
                    <ItemTile
                      key={nft.id}
                      id={nft.id}
                      image={nft.image}
                      name={nft.name}
                      profile={true}
                    />
                  ))
                ) : (
                  <div className="w-full">
                    <p className="text-2xl items-center text-center text-white w-full ">
                      No NFT found in the collection
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
