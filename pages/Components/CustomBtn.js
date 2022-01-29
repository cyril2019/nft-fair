import React from 'react';
import { Button } from '@chakra-ui/react';
export default function CustomBtn(props) {
  return (
    <Button
      as="a"
      backgroundColor="#915bff"
      border="1px solid #915bff"
      _hover={{
        backgroundColor: '#000',
        border: '1px solid #915bff',
        color: 'white',
      }}
      isLoading={props.load}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w={{ base: 'full', sm: 'auto' }}
      mb={{ base: 2, sm: 0 }}
      size="lg"
      cursor="pointer"
    >
      {props.text}
    </Button>
  );
}
