import React, {useState, useEffect} from 'react';
import Footer from './Components/Footer';
import ItemTile from './Components/ItemTile';
import ItemTileList from './Components/ItemTileList';
import Navbar from './Components/Navbar';
import { Sidebar, sidebar } from './Components/Sidebar';

const marketplace = () => {

  const [nfts, setNfts] = useState([])

    const getListings = async () => {
      const listing = await fetch("/api/marketplace", {
        method: "GET",
      });
      const data = await listing.json()
      setNfts(data);
      console.log(nfts)
    }

  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      {/* marketplace body  */}
        <button onClick={getListings}>CALL</button>
      <div className="w-full h-full  flex px-5 py-2 sm:px-10 sm:py-5 ">
        {/* market  */}
        {nfts.map((nft) => {
          return(
          <ItemTile image={nft.asset.image} name={nft.asset.name} />
        )})}
      </div>
      <Footer />
    </div>
  );
};

export default marketplace;
