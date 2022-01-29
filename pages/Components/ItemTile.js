import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Box, extendTheme, Icon, Flex, Image, Badge, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
// import { Box, Flex, Image, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaEthereum } from 'react-icons/fa';
// This is the default breakpoint

const ItemTile = (props) => {
  // const breakpoints = createBreakpoints({
  //   sm: '500px',
  //   md: '850px',
  //   lg: '1000px',
  //   xl: '1200px',
  //   '2xl': '1536px',
  // });
  // // 3. Extend the theme
  // const theme = extendTheme({ breakpoints });
  return (
    <Link href={`/nft/${props.id}`} passHref>
      <div className="w-full bg-gray item-tile-hover-animation rounded-md cursor-pointer">
        <div className={`w-full h-44 overflow-hidden`}>
          <img className="h-44 w-full object-cover rounded-t-md" src={props.image} />
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
    </Link>
    // <Link href={`/nft/${props.id}`} passHref>
    //   <Box
    //     width={{ base: '100%', sm: '25vw', lg: '20vw' }}
    //     height={'25vw'}
    //     className="bg-gray rounded-md flex-col cursor-pointer item-tile-hover-animation"
    //     maxHeight={'350px'}
    //     minHeight={{ base: '350px', sm: '170px' }}
    //   >
    //     {/* div for image  */}
    //     {/* <a href={`/nft/${props.id}`} passHref> */}
    //     <div className="w-full h-4/6 overflow-hidden">
    //       <img className="object-cover  self-center rounded-t-md" src={props.image} />
    //     </div>
    //     {/* div for pack info */}
    //     <Box className="flex justify-between items-center p-5 pt-6 sm:p-2">
    //       <div className="space-y-2 sm:space-y-0 ">
    //         <p className="font-bold text-2xl sm:text-xs md:text-base">{props.name}</p>
    //         <p className="text-xl sm:text-xs md:text-sm">@Cyril</p>
    //       </div>
    //       <p className="font-bold text-2xl sm:text-xs md:text-base">
    //         {' '}
    //         <span className="font-light text-dark-purple">
    //           0.005
    //           <Icon as={FaEthereum} className="mb-1" />
    //         </span>
    //       </p>
    //     </Box>
    //     {/* </a> */}
    //   </Box>
    // </Link>
  );
};

export default ItemTile;
