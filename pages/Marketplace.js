import React from 'react';
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
        {/* sidebar */}
        <div className="hidden sm:inline w-3/12">
          <Sidebar />
        </div>
        {/* market  */}
        <div className="grow max-w-9/12">
          <ItemTileList />
        </div>
      </div>
    </div>
  );
};

export default marketplace;
