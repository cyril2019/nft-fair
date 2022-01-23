import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Box, extendTheme, Icon, Text } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
// This is the default breakpoint

const ItemTile = () => {
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
          className="object-cover h-full w-full self-center rounded-t-md"
          src="https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=465&quality=45&auto=format&fit=max&dpr=2&s=e77237d5d7a176cf8eb80bea053a8274"
        />
      </div>
      {/* div for pack info */}
      <Box className="flex justify-between items-center p-5 pt-6 sm:p-2">
        <div className="space-y-2 sm:space-y-0 ">
          <p className="font-bold text-2xl sm:text-xs md:text-base">Pokemon</p>
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
