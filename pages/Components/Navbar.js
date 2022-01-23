import CustomBtn from './CustomBtn';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
// import thirdweb
import { useWeb3 } from '@3rdweb/hooks';

const Navbar = () => {
  const { connectWallet, address, error, provider } = useWeb3();
  console.log('👋 Address:', address);

  return (
    <div className="sticky top-0 px-5 py-3 font-semibold bg-black text-white text-xs ">
      {/* Full navbar  */}
      <div className="w-full md:flex justify-between items-center space-x-5 hidden ">
        {/* logo comes here */}
        <div className="md:flex items-center justify-between">
            <Link href="/" passHref>
          <div className="logo cursor-pointer"></div>
            </Link>
          {/* menu */}
          <ul className="flex justify-between space-x-4 text-light-gray ml-5">
            <Link href="/Marketplace" passHref>
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
              onClick={() => connectWallet('injected')}
            >
              Connect
            </button>
          ) : (
            <button className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple flex items-center">
              <FaEthereum />
              {address.substring(0, 6) + "..." + address.substring(address.length - 4)}
            </button>
          )}
        </div>
      </div>
      {/* Mobile view navbar */}
      <div className="md:hidden flex justify-between items-center ">
        <div className="logo"></div>

        <div className="flex space-x-5 text-3xl">
          <AiOutlineSearch />
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
