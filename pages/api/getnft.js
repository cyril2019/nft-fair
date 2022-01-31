import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const nftCollectionAddress = '0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59';
  const nftCollection = new ThirdwebSDK(wallet).getNFTModule(nftCollectionAddress);

  const { address } = req.body;
  await nftCollection
    .getOwned(address)
    .then((metadata) => {
      res.status(200).json(metadata);
    })
    .catch((err) => {
      res.status(408).json({ error: true });
    });
}
