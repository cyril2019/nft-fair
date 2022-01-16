import React from 'react';
import Navbar from './Components/Navbar';

const Marketplace = () => {
  return (
    <div>
      <Navbar />
      {/* marketplace body  */}
      <div className="w-screen flex overflow-x-hidden px-5 py-3 sm:px-10 sm:py-5">
        {/* sidebar */}
        <div className="w-3/12"></div>
        {/* market  */}
        <div className="9/12"></div>
      </div>
    </div>
  );
};

export default Marketplace;
