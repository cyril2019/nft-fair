import React from 'react';
import ItemTile from './ItemTile';
import { useState, useEffect } from 'react';

const ItemTileList = () => {
  const [nfts, setNfts] = useState([]);
  var key = 0;
  const getListings = async () => {
    const listing = await fetch('/api/marketplace', {
      method: 'GET',
    });
    const data = await listing.json();
    setNfts(data);
    console.log(nfts);
  };
  return (
    <div className="w-full min-h-screen text-light-gray text-xs">
      {/* title div for list of nfts */}
      <div className="">Explore</div>
      <button className="bg-purple" onClick={getListings}>
        CALL
      </button>

      <hr className="my-2" />
      {/* list of nft */}
      <div className="grid gap-5 p-2  sm:grid-cols-3 lg:grid-cols-4 justify-items-center ">
        {nfts.map((nft) => {
          return <ItemTile key={key++} image={nft.asset.image} name={nft.asset.name} />;
        })}
      </div>
    </div>
  );
};

export default ItemTileList;
