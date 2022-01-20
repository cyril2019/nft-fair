import React from 'react';
import Footer from './Components/Footer';
import ItemTile from './Components/ItemTile';
import ItemTileList from './Components/ItemTileList';
import Navbar from './Components/Navbar';
import { Sidebar, sidebar } from './Components/Sidebar';

const marketplace = () => {
  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      {/* marketplace body  */}
      <div className="w-full h-full  flex px-5 py-2 sm:px-10 sm:py-5 ">
        {/* market  */}
        <ItemTileList />
      </div>
      <Footer />
    </div>
  );
};

export default marketplace;
