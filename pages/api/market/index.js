import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketModuleAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';
  const market = new ThirdwebSDK(wallet).getMarketplaceModule(marketModuleAddress);

  await market
    .getAllListings()
    .then((metadata) => {
      res.status(200).json(metadata);
    })
    .catch((err) => {
      res.status(200).json({ error: true });
    });
}
