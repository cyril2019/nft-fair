import React from 'react';
import { FaEthereum } from 'react-icons/fa';
import { useAddressContext } from '../../context/addressContext';
import { useRouter } from 'next/router';

const ItemTile = (props) => {
  const { handleGame } = useAddressContext();
  const router = useRouter();
  const handleRedirect = (img) => {
    handleGame(img);
    router.push(`/wrong_side`);
  };
  return (
    <div
      className="w-full bg-gray item-tile-hover-animation rounded-md cursor-pointer"
      onClick={() => handleRedirect(props.image)}
    >
      <div className={`w-full h-44 overflow-hidden`}>
        <img className="h-44 w-full object-cover rounded-t-md" src={props.image} alt="NFT" />
      </div>
      <div className="flex justify-center h-24 items-center">
        <div className="p-2 text-center ">
          <p className="text-lg font-bold text-white">{props.name}</p>
          <div className="flex items-center justify-center text-lg">
            <p>0.0002</p>
            <FaEthereum className="text-dark-purple text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTile;
