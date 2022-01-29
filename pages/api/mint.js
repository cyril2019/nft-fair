import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers, providers } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';
  const nft = new ThirdwebSDK(wallet).getNFTModule(nftCollectionAddress);

  const marketAddress = '0x1b741227186B2d2a7D2238E5fd5A701a55FDc5B1';
  const { account, nftimage, name, description } = req.body;

  let data = await nft.mintTo(account, {
    name: name,
    description: description,
    image: nftimage,
  });

  return res.status(200).json(data);
  const tokenId = data.id;
  const quantity = ethers.utils.parseUnits('1');
  const currency = '0x0000000000000000000000000000000000000000';

  const price = ethers.utils.parseUnits('0');
  const time = 0;
  const listing = {
    // address of the contract the asset you want to list is on
    nftCollectionAddress,
    // token ID of the asset you want to list
    tokenId,
    // address of the currency contract that will be used to pay for the listing
    currency,
    price,
    // in how many seconds with the listing open up
    quantity,
    // how long the listing will be open for
    time,
    // how many of the asset you want to list
    // how much the asset will
  };

  await market.list(listing);

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
