import { MdCreateNewFolder, MdSell } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import CustomBtn from './Components/CustomBtn';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { FiXCircle } from 'react-icons/fi';
import Link from 'next/link';

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
          <Icon boxSize={5} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
      <Navbar />
      <Box px={8} py={24} mx="auto">
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
              PIXEL NFT SYSTEM
            </Text>{' '}
            in one single place.
          </chakra.h1>
          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
            className="text-white"
          >
            Hellonext is a feature voting software where you can allow your users to vote on
            features, publish roadmap, and complete your customer feedback loop.
          </chakra.p>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: 'left', md: 'center' }}
          >
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
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            {/* <CustomBtn text="Get Started" />
            <CustomBtn text="Start creating" /> */}
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
              Book a Demo
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Stack>
        </Box>
        <Box w={{ base: 'full', md: 10 / 12 }} mx="auto" mt={20} textAlign="center">
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="https://kutty.netlify.app/hero.jpg"
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Box>
      <Box px={8} py={20} mx="auto" shadow="xl" color={'white'}>
        <Box textAlign={{ lg: 'center' }}>
          <chakra.p
            mt={2}
            fontSize={{ base: '3xl', sm: '4xl' }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Features
          </chakra.p>
          <chakra.p mt={4} maxW="2xl" fontSize="xl" mx={{ lg: 'auto' }}>
            Get insights to dig down into what's powering your growth the most.
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="red"
            title="Create NFT's"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            Create your own pixel-art NFT.
          </Feature>

          <Feature
            color="pink"
            title="Sell"
            icon={
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clipRule="evenodd"
              />
            }
          >
            Sell your NFT's on our
          </Feature>

          <Feature
            color="yellow"
            title="Clickable"
            icon={
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            }
          >
            Stay informed with daily, weekly, or monthly reports on all your insights data.
          </Feature>

          <Feature
            color="green"
            title="Finger Printing"
            icon={
              <>
                <path
                  fillRule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </>
            }
          >
            Our forecasting is your magical crystal ball that helps you predict and plan for the
            future.
          </Feature>
        </SimpleGrid>
      </Box>
      <FiXCircle className="text-2xl text-green" />
      <Footer />
    </div>
  );
}
