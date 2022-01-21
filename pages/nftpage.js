import React from 'react';
import CustomBtn from './Components/CustomBtn';
import Navbar from './Components/Navbar';

const nftpage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-black text-light-gray">
      <Navbar />
      <div className="w-full grow grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center">
        <div className="p-5">
          <img
            className="rounded-lg object-cover object-center"
            src="https://cdn.vox-cdn.com/thumbor/0KceZSeHOKG6AGfBZN6EopWM5Kc=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22882538/Pokemon_UNITE___Team_Up._Take_Down.___Screenshot_1.png"
          />
        </div>
        <div className="p-5 text-center grid grid-cols-1 justify-items-center">
          <p className="text-2xl text-white sm:text-xl md:text-2xl font-black">
            Pokemon Collection
          </p>
          <div className="flex items-center p-2 space-x-2">
            <img
              className="h-10 w-10 rounded-full object-cover object-center "
              src="https://i.insider.com/5e820b04671de06758588fb8?width=700"
            />
            <p className="text-lg font-bold"> @Cyril</p>
          </div>
          <p className="w-1/2">
            Lorem Ipsum is simply dummy text of{' '}
            <span className="hidden md:inline">
              the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type.
            </span>
            <span className="md:hidden">...</span>
          </p>
          <div className="p-2">
            <p className="text-2xl text-white sm:text-xl md:text-2xl font-black">Current Price</p>
            <p className="text-3xl text-light-purple sm:text-2xl md:text-3xl font-black">
              1.002 ETH
            </p>
          </div>
          <CustomBtn text="But Now" text-color="white" />
        </div>
      </div>
    </div>
  );
};

export default nftpage;
