import React from 'react';
import ItemTile from './ItemTile';

const ItemTileList = () => {
  return (
    <div className="w-full  text-light-gray text-xs">
      {/* title div for list of nfts */}
      <div className=" p-2">Explore</div>
      <hr className=" my-4" />
      {/* list of nft */}
      <div className="grid gap-5 p-2  sm:grid-cols-4 justify-items-center sm:justify-items-stretch max-h-screen overflow-scroll">
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
