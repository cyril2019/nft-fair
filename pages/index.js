import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { MdSell, MdOutlineCreate } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';
import { IoGameControllerOutline } from 'react-icons/io5';
import Landing from '../img/landing.jpeg';

export default function Home() {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            textAlign="center"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3 mb={2} fontWeight="semibold" lineHeight="shorter" className="text-white">
          {props.title}
        </chakra.h3>
        <chakra.p fontSize="sm" className="text-light-gray">
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <div className="w-full  bg-black flex flex-col">
      <Head>
        <title>NFT - Fair</title>
      </Head>
      <Navbar />
      <Box px={8} py={8} mx="auto">
        <Box
          w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: 'left', md: 'center' }}
        >
          <chakra.h1
            mb={6}
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: 'normal', md: 'tight' }}
            className="text-white"
          >
            All your{' '}
            <Text
              display={{ base: 'block', lg: 'inline' }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              PIXEL NFTs
            </Text>{' '}
            in one single place.
          </chakra.h1>
          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            className="text-white"
          >
            Create, buy, sell, earn and even play with your pixelated NFTs. This is the one true
            stop for NFTs and pixel-art lovers.
          </chakra.p>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: 'left', md: 'center' }}
          >
            <Link href="/create" passHref>
              <Button
                as="a"
                variant="solid"
                backgroundColor="#915bff"
                border="1px solid #915bff"
                _hover={{
                  backgroundColor: '#000',
                  border: '1px solid #915bff',
                  color: 'white',
                }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                cursor="pointer"
              >
                Create your NFT
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Link>
            {/* <CustomBtn text="Get Started" />
            <CustomBtn text="Start creating" /> */}
            <Link href="/marketplace" passHref>
              <Button
                as="a"
                backgroundColor="#915bff"
                border="1px solid #915bff"
                _hover={{
                  backgroundColor: '#000',
                  border: '1px solid #915bff',
                  color: 'white',
                }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: 'full', sm: 'auto' }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                cursor="pointer"
              >
                Explore NFT's
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Link>
          </Stack>
        </Box>
        <Box
          w={{ base: 'full', md: 10 / 12 }}
          mx="auto"
          mt={20}
          textAlign="center"
          border="1px solid white"
          borderRadius="10px"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="https://res.cloudinary.com/hackbot/image/upload/v1643655287/landing2_vd4x4n.jpg"
            alt="NFT Page"
          />
        </Box>
      </Box>
      <Box px={8} py={20} mx="auto" shadow="xl" color={'white'}>
        <Box textAlign={{ lg: 'center' }} mb={12}>
          <chakra.p
            mt={2}
            mb={4}
            fontSize={{ base: '3xl', sm: '4xl' }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Features
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="red"
            title="Create NFT's"
            icon={<MdOutlineCreate style={{ textAlign: 'center' }} />}
          >
            Create your own pixel-art NFT.
          </Feature>

          <Feature color="pink" title="Sell" icon={<MdSell />}>
            Sell your NFT's on our marketplace
          </Feature>
          <Feature color="green" title="Gaming" icon={<IoGameControllerOutline />}>
            Play games with your own created NFTs
          </Feature>
          <Feature color="green" title="Earn" icon={<FaDollarSign />}>
            Prove your mettle and earn premium NFTs
          </Feature>
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
}
