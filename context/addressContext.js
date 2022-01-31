import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [walletaddress, setAddress] = useState('kokokoko');
  const [nftimage, setImage] = useState('');
  const [game, setGame] = useState('');

  const handleGame = (newGame) => {
    setGame(newGame);
  };
  const handleImage = (img) => {
    setImage(img);
  };

  const handleAddress = (addr) => {
    setAddress(addr);
  };

  return (
    <AddressContext.Provider
      value={{ walletaddress, handleAddress, nftimage, handleImage, game, handleGame }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(AddressContext);
};
