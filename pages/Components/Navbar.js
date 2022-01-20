import { Button } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 px-5 py-3 font-semibold bg-black text-white text-xs ">
      {/* Full navbar  */}
      <div className="w-full md:flex justify-between items-center space-x-5 hidden ">
        {/* logo comes here */}
        <div className="logo"></div>
        {/* menu */}
        <ul className="flex justify-between space-x-4 text-light-gray">
          <li className="hover:text-white cursor-pointer">Explore</li>
          <li className="hover:text-white cursor-pointer">How it works</li>
          <li className="hover:text-white cursor-pointer">Community</li>
        </ul>
        {/* input to search  */}
        <div className="flex grow">
          <input placeholder="Search" className=" py-1 px-2 grow rounded-md bg-gray " />
          <AiOutlineSearch className="text-3xl  p-1" />
        </div>

        {/* buttons  */}
        <div className="space-x-2 flex">
          {/* search  */}
          <button className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black">
            Create
          </button>
          <button className="border-2 border-solid px-2 py-1 rounded-md  font-bold hover:bg-white hover:text-purple">
            Connect
          </button>
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
