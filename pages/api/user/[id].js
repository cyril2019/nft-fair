import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

export default async function mint(req, res) {
  const rpcUrl = 'rinkeby';

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.getDefaultProvider(rpcUrl));

  const nftCollectionAddress = '0xAC405C7375980a0C2ADBAD8300F9374d2880985d';
  const nftCollection = new ThirdwebSDK(wallet).getNFTModule(nftCollectionAddress);

  const { id } = req.query;
  await nftCollection
    .getOwned(id)
    .then((metadata) => {
      res.status(200).json(metadata);
    })
    .catch((err) => {
      res.status(408).json({ error: true });
    });
}
