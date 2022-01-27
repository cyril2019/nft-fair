// const listingId = 0;
// // Quantity of the asset you want to buy
// const quantityDesired = 1;

// await module.buyoutDirectListing({ listingId, quantityDesired });

import { ThirdwebSDK } from '@3rdweb/sdk';
import { useWeb3 } from '@3rdweb/hooks';
import { ethers, BigNumber, constants } from 'ethers';

// This depend on your HTTP Server setup. In this example, we're using next.js
// api handlers.
export default async function mint(req, res) {
  // the RPC URL to the blockchain that the NFT contract is deployed on.
  // "rinkeby" = rinkeby testnet,
  // "https://rpc-mumbai.maticvigil.com" = mumbai testnet.
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';
  const marketCollection = new ThirdwebSDK(wallet).getMarketplaceModule(marketAddress);

  // returning the HTTP response. This depends on the HTTP server framework.

  // mint "My Sword" NFT to the wallet address that was requested.
  // note: async / await works too.
  //   const quantity = BigNumber.from('1');
  const quantityDesired = ethers.utils.parseUnits('1');
  const { id } = req.query;
  const listingId = id;
  await marketCollection
    .buyoutDirectListing({ listingId, quantityDesired })
    .then((metadata) => {
      res.status(200).json(metadata);
      console.log(metadata);
    })
    .catch((err) => {
      console.log(err);
      res.status(408).json('hi');
    });
}
