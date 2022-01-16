import { Button } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

const Navbar = () => {
  return (
    <div className=" px-5 py-3 sm:px-10 sm:py-5 bg-black text-white">
      {/* Full navbar  */}
      <div className="w-full md:flex justify-between items-center space-x-2 hidden ">
        {/* logo comes here */}
        <div className="w-10 h-10 bg-purple-600"></div>
        {/* menu */}
        <ul className="flex justify-between space-x-4">
          <li>Explore</li>
          <li>How it works</li>
          <li>Community</li>
        </ul>
        {/* search  */}
        <div className="flex items-center bg-purple-500 rounded-md">
          <input placeholder="Search" className=" py-1 px-2 text-black rounded-l-md" />
          <AiOutlineSearch className="text-3xl  p-1" />
        </div>
        {/* buttons  */}
        <div className="space-x-2">
          <button className="border-2 border-solid border-purple-500 px-2 py-1 rounded-md font-bold bg-purple-500 hover:bg-black">
            Create
          </button>
          <button className="border-2 border-solid px-2 py-1 rounded-md font-bold hover:bg-white hover:text-purple-500">
            Connect
          </button>
        </div>
      </div>
      {/* Mobile view navbar */}
      <div className="md:hidden flex justify-between items-center ">
        <div className="w-10 h-10 bg-purple-600"></div>
        <div className="flex space-x-5 text-3xl">
          <AiOutlineSearch />
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
