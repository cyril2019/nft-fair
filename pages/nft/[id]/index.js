import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import {
  Table,
  Tbody,
  Td,
  Th,
  Tooltip,
  Tr,
  Button,
  Spinner,
  useToast,
  Code,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import Head from 'next/head';

export default function Nftpage() {
  const router = useRouter();
  const [nft, setNFT] = useState();
  const [loading, setLoading] = useState(true);
  const { address, provider, chainId } = useWeb3();
  const [sdk, setSDK] = useState();
  const { id } = router.query;
  const toast = useToast();
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    setUpSDK();
    getNFTDetails(id);
  }, [, provider]);

  const setUpSDK = async () => {
    const newSDK =
      provider !== undefined ? new ThirdwebSDK(provider.getSigner(address)) : new ThirdwebSDK();
    setSDK(newSDK);
  };

  const getNFTDetails = async () => {
    const listing = await fetch(`/api/nft/${id}`, {
      method: 'GET',
    });
    const data = await listing.json();
    if (data.error === true) {
      toast({
        title: 'Cannot fetch NFT Data',
        description: 'Error occured while fetching NFT Data',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      setLoading(false);
      return;
    }
    setNFT(data);
    setLoading(false);
  };

  const buyNFT = async () => {
    onOpen();
    if (provider === undefined || chainId === undefined || chainId !== 4) {
      onClose();
      toast({
        title: 'Connect Wallet',
        description: 'Connect your wallet and switch to Rinkeby network',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right',
      });
      return;
    }
    const listingId = id;
    const quantityDesired = '1';
    const market = sdk.getMarketplaceModule('0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1');
    console.log(market);
    await market
      .buyoutDirectListing({ listingId, quantityDesired })
      .then((metadata) => {
        toast({
          title: 'Purchase successfull',
          description: 'Successfully purchased NFT',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'bottom-right',
        });

        router.push('/profile');
      })
      .catch((err) => {
        toast({
          title: 'Error Occured',
          description: 'Error occured while completing transaction',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'bottom-right',
        });
      });
    onClose();
  };

  return (
    <div className="w-full h-screen flex flex-col bg-black text-light-gray">
      <Head>
        <title>NFT Details</title>
      </Head>
      <Navbar />
      <Modal onClose={onClose} isOpen={isOpen} isCentered closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <div className="text-white flex items-center justify-center h-40 bg-black">
            <Spinner className="m-2 text-light-purple" />
            <p>{`Authorising transaction.... `}</p>
          </div>
        </ModalContent>
      </Modal>
      {loading ? (
        <div className="text-white w-full min-h-screen flex items-center justify-center bg-black">
          <Spinner className="m-2 text-light-purple" />
          <p>{`Fetching NFT Data...   `}</p>
        </div>
      ) : nft !== undefined ? (
        <div className="w-full grow grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
          <div className="p-10 w-full md:w-9/12">
            <img
              alt="NFT Name"
              className="rounded-lg object-center box-border"
              src={
                nft !== undefined && nft.asset !== undefined
                  ? nft.asset.image
                  : 'https://gigaland.io/images/items/big-4.jpg'
              }
            />
          </div>
          <div className=" p-10 mb-10 w-full">
            <p className="text-3xl font-extrabold text-white">
              {nft !== undefined ? nft.asset.name : ''}
            </p>
            <p className="">{nft !== undefined ? nft.asset.description : ''}</p>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold text-purple">Price</p>
              <p className="text-2xl text-white sm:text-2xl md:text-3xl font-black flex mt-1 items-center">
                {nft !== undefined ? nft.buyoutCurrencyValuePerToken.displayValue : ''}
                <FaEthereum className="text-purple ml-2" />
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
              style={{ marginTop: 30 }}
              onClick={buyNFT}
            >
              Buy Now
            </Button>
            <div className="flex flex-col space-y-4 overflow-auto text-sm text-gray-800 lg:mr-20 mt-10">
              <h2 className="text-lg font-semibold">Details</h2>
              <Table size="sm" className="border-collapse">
                <Tbody>
                  <Th>Owner</Th>
                  <Tr>
                    <Td className="flex flex-row items-center space-x-2">
                      {/* <span>Owner:</span> */}
                      <Tooltip label="View User's Collection" hasArrow fontSize="sm">
                        <Code className="address truncate">
                          <Link href={`/user/${nft.sellerAddress}`}>{nft.sellerAddress}</Link>
                        </Code>
                      </Tooltip>
                    </Td>
                  </Tr>
                  <Th>Contract Address</Th>

                  <Tr>
                    <Td className="flex flex-row items-center space-x-2">
                      {/* <span>Contract Address</span> */}
                      <Tooltip label="View on Etherscan" hasArrow fontSize="sm">
                        <Code className="address truncate">
                          <a
                            href={`https://rinkeby.etherscan.io/address/${nft.assetContractAddress}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {nft.assetContractAddress}
                          </a>
                        </Code>
                      </Tooltip>
                      {/* <ExternalLinkIcon className="h-4 text-gray-400" /> */}
                      <FiExternalLink className="h-4 text-light-gray" />
                    </Td>
                  </Tr>
                  <Th>Token ID</Th>

                  <Tr>
                    <Td className="flex flex-row items-center space-x-2">{nft.id}</Td>
                  </Tr>
                  <Th>Token Standard</Th>

                  <Tr>
                    <Td className="flex flex-row items-center space-x-2">ERC-721 </Td>
                  </Tr>
                  <Th>Network</Th>

                  <Tr>
                    <Td className="flex flex-row items-center space-x-2">Rinkeby</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
}
