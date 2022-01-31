import React from 'react';
import ItemTile from './ItemTile';
import { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
// Add a loader here
const ItemTileList = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  var key = 0;

  useEffect(() => {
    getListings();
  }, []);
  const getListings = async () => {
    const listing = await fetch('/api/market', {
      method: 'GET',
    });
    const data = await listing.json();
    setNfts(data);
    setLoading(false);
  };

  return loading ? (
    <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching NFT's...   `}</p>
        </div>
        <p className="text-xs">This may take a while</p>
      </div>
    </div>
  ) : (
    <div className="w-full min-h-screen text-light-gray text-xs">
      <p className="text-2xl font-bold text-white">Marketplace</p>

      <hr className="my-2" />
      {/* list of nft */}
      <div className="grid gap-4 p-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
        {nfts.map((nft) => {
          return (
            <ItemTile
              key={key++}
              image={nft.asset.image}
              name={nft.asset.name}
              id={nft.id}
              price={nft.buyoutCurrencyValuePerToken.displayValue}
            />
          );
        })}
      </div>
      {nfts.length === 0 ? (
        <p className="text-white text-3xl text-center mt-10">{`No NFT in marketplace :(`}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemTileList;
