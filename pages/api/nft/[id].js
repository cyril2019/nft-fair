import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';
  const marketCollection = new ThirdwebSDK(wallet).getMarketplaceModule(marketAddress);

  const { id } = req.query;
  await marketCollection
    .getListing(id)
    .then((metadata) => {
      res.status(200).json(metadata);
      // console.log(metadata);
    })
    .catch((err) => {
      console.log(err);
      res.status(408).json('hi');
    });
}
