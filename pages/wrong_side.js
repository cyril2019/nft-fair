import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const wrong_side = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center">Game Comes here</div>
      <Footer />
    </div>
  );
};

export default wrong_side;
