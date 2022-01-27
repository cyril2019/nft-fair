import CustomBtn from './CustomBtn';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
// import thirdweb
import { useWeb3 } from '@3rdweb/hooks';
import { useAddressContext } from '../../context/addressContext';
const Navbar = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  const { walletaddress, handleAddress } = useAddressContext();
  const [menuOpen, setMenuOpen] = useState(false);
  function menuSwitch() {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  const checkWallet = () => {
    connectWallet('injected');
    console.log(provider);
    if (address) {
      handleAddress(address);
    }
  };
  return (
    <div className="sticky top-0  px-5 py-3 font-semibold z-50 bg-black text-white text-xs ">
      {/* Full navbar  */}
      <div className="w-full md:flex justify-between items-center space-x-5 hidden ">
        {/* logo comes here */}
        <div className="md:flex items-center justify-between">
          <Link href="/" passHref>
            <div className="logo cursor-pointer"></div>
          </Link>
          {/* menu */}
          <ul className="flex justify-between space-x-4 text-light-gray ml-5">
            <Link href="/marketplace" passHref>
              <li className="hover:text-white cursor-pointer">Explore</li>
            </Link>
            <li className="hover:text-white cursor-pointer">How it works</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>
        {/* input to search  */}
        {/* <div className="flex grow">
          <input placeholder="Search" className=" py-1 px-2 grow rounded-md bg-gray " />
          <AiOutlineSearch className="text-3xl  p-1" />
        </div> */}

        {/* buttons  */}
        <div className="space-x-2 flex">
          {/* search  */}
          <Link href="/create" passHref>
            <button className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black">
              Create
            </button>
          </Link>
          {!address ? (
            <button
              className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple"
              onClick={() => checkWallet()}
            >
              Connect
            </button>
          ) : (
            <Link href="/profile">
              <button className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple flex items-center">
                <FaEthereum />
                {address.substring(0, 6) + '...' + address.substring(address.length - 4)}
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* Mobile view navbar */}
      <div className="md:hidden flex justify-between items-center bg-black">
        <Link href="/" passHref>
          <div className="logo cursor-pointer"></div>
        </Link>
        <div className="flex space-x-5 text-3xl">
          <AiOutlineMenu onClick={menuSwitch} className={menuOpen ? 'hidden' : 'cursor-pointer'} />
          <AiOutlineClose
            onClick={menuSwitch}
            className={!menuOpen ? 'hidden' : 'cursor-pointer'}
          />
          <div
            className={
              menuOpen ? 'max-w-full absolute top-14 right-5  bg-gray rounded-md' : 'hidden'
            }
          >
            <div className="relative z-50 space-y-2 text-lg p-7 border-solid border-white border-2 rounded-md">
              <Link href="/marketplace" passHref>
                <p className=" cursor-pointer hover:text-light-purple">Explore</p>
              </Link>
              <p className="cursor-pointer hover:text-light-purple">How it works</p>
              <p className="cursor-pointer hover:text-light-purple">Community</p>
              <Link href="/create" passHref>
                <button className="m-auto border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black">
                  Create
                </button>
              </Link>
              <p></p>
              {!address ? (
                <button
                  className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple"
                  onClick={() => checkWallet()}
                >
                  Connect
                </button>
              ) : (
                <Link href="/profile">
                  <button className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple flex items-center">
                    <FaEthereum />
                    {address.substring(0, 6) + '...' + address.substring(address.length - 4)}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
