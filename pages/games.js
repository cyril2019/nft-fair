import React from 'react';
import Footer from './Components/Footer';
import GameTile from './Components/GameTile';
import Link from 'next/link';
import Navbar from './Components/Navbar';

const games = () => {
  return (
    <div className="w-full bg-black text-light-gray ">
      <Navbar />
      <div className="min-h-screen">
        <p className="p-5 text-2xl font-bold">Games</p>
        <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <GameTile
            image="https://media.istockphoto.com/photos/generic-sports-car-moving-at-high-speed-on-a-racetrack-picture-id1290326188?b=1&k=20&m=1290326188&s=170667a&w=0&h=LDM5PUJ-mEXr81gH4yRun7kgY5K2yPcAuPXwusEIbm8="
            name="Wrong Side"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default games;
