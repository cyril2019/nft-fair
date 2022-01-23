import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [walletaddress, setAddress] = useState('kokokoko');
  const [nftimage, setImage] = useState('');

  const handleImage = (img) => {
    console.log('in context');
    setImage(img);
  };

  const handleAddress = (addr) => {
    setAddress(addr);
  };
  const ctxProps = {
    walletaddress,
    handleAddress,
    nftimage,
    handleImage,
  };

  return (
    <AddressContext.Provider value={{ walletaddress, handleAddress, nftimage, handleImage }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(AddressContext);
};
