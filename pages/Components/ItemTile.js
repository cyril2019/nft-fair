import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Box, extendTheme, Icon, Text } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
// This is the default breakpoint

const ItemTile = (props) => {
  const breakpoints = createBreakpoints({
    sm: '500px',
    md: '850px',
    lg: '1000px',
    xl: '1200px',
    '2xl': '1536px',
  });

  // 3. Extend the theme
  const theme = extendTheme({ breakpoints });
  return (
    <Box
      width={{ base: '100%', sm: '25vw', lg: '20vw' }}
      height={'25vw'}
      className="bg-gray rounded-md flex-col cursor-pointer item-tile-hover-animation"
      maxHeight={'350px'}
      minHeight={{ base: '350px', sm: '170px' }}
    >
      {/* div for image  */}
      <div className="w-full h-4/6 overflow-hidden">
        <img
          className="object-cover h-full self-center rounded-t-md"
          src={props.image}
        />
      </div>
      {/* div for pack info */}
      <Box className="flex justify-between items-center p-5 pt-6 sm:p-2">
        <div className="space-y-2 sm:space-y-0 ">
          <p className="font-bold text-2xl sm:text-xs md:text-base">{props.name}</p>
          <p className="text-xl sm:text-xs md:text-sm">@Cyril</p>
        </div>
        <p className="font-bold text-2xl sm:text-xs md:text-base">
          {' '}
          <span className="font-light text-dark-purple">
            0.005
            <Icon as={FaEthereum} className="mb-1" />
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default ItemTile;
