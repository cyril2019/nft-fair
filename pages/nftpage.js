import React from 'react';
import CustomBtn from './Components/CustomBtn';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

const nftpage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-black text-light-gray">
      <Navbar />
      <div className="w-full grow grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="p-10">
          <img
            alt="NFT Name"
            className="rounded-lg object-center box-border"
            src="https://gigaland.io/images/items/big-4.jpg"
          />
        </div>
        <div className="flex flex-col items-start px-10 md:px-0">
          <p className="text-2xl text-white sm:text-3xl md:text-5xl md:mt-10 font-black">
            Pokemon Collection
          </p>
          <p className="w-3/4 mt-10">
            Lorem Ipsum is simply dummy text ofs
            {/* <span className="hidden md:inline"> */}
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type.
            {/* </span>
            <span className="md:hidden">...</span> */}
          </p>
          <div className="p-2 mt-5">
            <p className="text-sm text-white sm:text-xs md:text-xs font-black">Price</p>
            <p className="text-3xl text-white sm:text-2xl md:text-3xl font-black flex mt-4 items-center">
              <FaEthereum className="text-purple mr-2" />
              1.002
            </p>
          </div>
          <Button
            as="a"
            variant="solid"
            backgroundColor="#915bff"
            border="1px solid #915bff"
            color="#fff"
            _hover={{
              backgroundColor: '#000',
              border: '1px solid #915bff',
            }}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: 'full', sm: 'auto' }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            style={{ marginTop: 4 }}
          >
            Buy Now
          </Button>

          <div className="mt-5">
            <p className="text-white text-2xl">Details</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default nftpage;
