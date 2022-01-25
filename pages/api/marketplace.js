import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";

// This depend on your HTTP Server setup. In this example, we're using next.js
// api handlers.
export default async function mint(req , res) {
  // the RPC URL to the blockchain that the NFT contract is deployed on.
  // "rinkeby" = rinkeby testnet,
  // "https://rpc-mumbai.maticvigil.com" = mumbai testnet.
  const rpcUrl = "rinkeby";

  // setup a wallet using private key for the SDK.
  // the wallet must have MINTER role to mint the NFT.
  // you can assign MINTER role to the wallet through the NFT collection dashboard.
  const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    ethers.getDefaultProvider(rpcUrl)
  )

  // initialize the SDK and get the NFT Collection module
  // get the contract address (0x...) from your dashboard!
  const marketModuleAddress = "0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1"
    const market = new ThirdwebSDK(wallet).getMarketplaceModule(marketModuleAddress);

  // returning the HTTP response. This depends on the HTTP server framework.
  

    // mint "My Sword" NFT to the wallet address that was requested.
    // note: async / await works too.
    
    await market.getAllListings()
      .then((metadata) => {
        // Returning the NFT metadata to the client requested.
        // This depends on the HTTP server framework
        res.status(200).json(metadata);
        console.log(metadata)
        
      })
      .catch((err) => {
          console.log(err)
          res.status(200).json("hi");
      })
  
};