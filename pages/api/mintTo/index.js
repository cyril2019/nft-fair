import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers, providers } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
  );

  const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';
  const nft = new ThirdwebSDK(wallet).getNFTModule(nftCollectionAddress);

  const { account, nftimage, name, description } = req.body;

  await nft
    .mintTo(account, {
      name: name,
      description: description,
      image: nftimage,
    })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(200).json({ error: true });
    });
  return;
}
