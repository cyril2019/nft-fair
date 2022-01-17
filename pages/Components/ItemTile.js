import React from 'react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Box, extendTheme, Icon, Text } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
// This is the default breakpoint

const ItemTile = () => {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '850px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  });

  // 3. Extend the theme
  const theme = extendTheme({ breakpoints });
  return (
    <Box
      width={{ base: '100%', sm: '15vw' }}
      height={'25vw'}
      className="bg-gray rounded-md flex-col "
      maxHeight={'350px'}
      minHeight={{ base: '350px', sm: '170px' }}
    >
      {/* div for image  */}
      <div className="w-full h-4/6 overflow-hidden">
        <img
          className="object-cover h-full self-center rounded-t-md"
          src="https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon"
        />
      </div>
      {/* div for pack info */}
      <Box className="" padding={{ base: '10px', sm: '5px', md: '10px' }}>
        <Text fontSize={{ base: '12px', sm: '10px', md: '12px' }} className="font-bold">
          Pokemon{' '}
        </Text>
        <Text fontSize={{ base: '10px', sm: '8px', md: '10px' }} className="">
          @Cyril
        </Text>
        <Text fontSize={{ base: '10px', sm: '8px', md: '10px' }} className="">
          <span className="font-light text-dark-purple">
            0.005
            <Icon as={FaEthereum} className="mb-1" />
          </span>
        </Text>
      </Box>
    </Box>
  );
};

export default ItemTile;
