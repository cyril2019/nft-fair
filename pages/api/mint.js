import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';
  const nft = new ThirdwebSDK(wallet).getNFTModule(nftCollectionAddress);

  const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';
  const market = new ThirdwebSDK(wallet).getMarketplaceModule(marketAddress);
  const { account, nftimage, name, description } = req.body;

  let data = await nft.mintTo(account, {
    name: name,
    description: description,
    image: nftimage,
  });
  console.log('1 done');
  if (!data) {
    return res.status(200).json({ success: 'false' });
  }

  let metaData = await market.createDirectListing({
    assetContractAddress: nftCollectionAddress,
    buyoutPricePerToken: ethers.utils.parseUnits('0.000002'),
    currencyContractAddress: '0x0000000000000000000000000000000000000000',
    listingDurationInSeconds: 60 * 60 * 24,
    quantity: 1,
    startTimeInSeconds: Math.floor(Date.now() / 1000),
    tokenId: data.id,
  });

  console.log(metaData);
  if (!metaData) {
    return res.status(200).json({ success: 'false' });
  }

  return res
    .status(200)
    .json(metaData)
    .catch((err) => {
      console.log(err);
      res.status(204).json('hi');
    });
}
