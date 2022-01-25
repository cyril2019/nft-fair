import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';

// This depend on your HTTP Server setup. In this example, we're using next.js
// api handlers.
export default async function mint(req, res) {
  // the RPC URL to the blockchain that the NFT contract is deployed on.
  // "rinkeby" = rinkeby testnet,
  // "https://rpc-mumbai.maticvigil.com" = mumbai testnet.
  const rpcUrl = 'rinkeby';

  // setup a wallet using private key for the SDK.
  // the wallet must have MINTER role to mint the NFT.
  // you can assign MINTER role to the wallet through the NFT collection dashboard.
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  // initialize the SDK and get the NFT Collection module
  // get the contract address (0x...) from your dashboard!
  const nft = new ThirdwebSDK(wallet).getNFTModule('0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59');

  // returning the HTTP response. This depends on the HTTP server framework.
  const { account, nftimage, name, description } = req.body;

  // mint "My Sword" NFT to the wallet address that was requested.
  // note: async / await works too.
  console.log(account);
  await nft
    .mintTo(account, {
      name: name,
      description: description,
      image: nftimage,
    })
    .then((metadata) => {
      // Returning the NFT metadata to the client requested.
      // This depends on the HTTP server framework
      res.status(204).json(metadata);
      console.log(metadata);
    })
    .catch((err) => {
      console.log(err);
      res.status(204).json('hi');
    });
}
