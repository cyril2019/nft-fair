import React from 'react';
import ItemTile from './ItemTile';

const ItemTileList = () => {
  return (
    <div className="w-full  text-light-gray text-xs">
      {/* title div for list of nfts */}
      <div className="">Explore</div>
      <hr className="my-2" />
      {/* list of nft */}
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
        <ItemTile />
        <ItemTile />
        <ItemTile />
      </div>
    </div>
  );
};

export default ItemTileList;
