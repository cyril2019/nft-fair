import { MdCreateNewFolder, MdSell } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import CustomBtn from './Components/CustomBtn';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
export default function Home() {
  return (
    <div className="w-full  bg-black flex flex-col">
      <Navbar />
      <div className="w-full grow grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        {/* left side  */}
        <div className="text-light-gray  md:min-h-screen flex items-center">
          <div className="p-5 py-10 space-y-2">
            <p className="text-3xl text-white font-black">Create, Discover, Buy and Sell NFT </p>
            <p className="text-xl text-light-purple">Created using ThirdWeb.</p>
            <CustomBtn text={'Explore'} />
          </div>
        </div>
        {/* right side  */}
        <div className="w-9/12  p-5">
          <img
            className="rounded-xl"
            src="https://i.etsystatic.com/18906228/r/il/b16c74/2376310773/il_fullxfull.2376310773_l0ai.jpg"
          />
        </div>
      </div>
      <div className="pt-16 sm:p-0">
        <p className="text-3xl font-semibold text-center text-light-gray">Things you can do</p>
      </div>
      <div className="w-full py-7 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center p-5">
        <div className="rounded-md text-center p-7 space-y-2">
          <p>
            <MdCreateNewFolder className="text-light-purple text-7xl m-auto" />
          </p>

          <p className="text-light-gray text-2xl font-bold">CREATE</p>
          <p className="text-light-gray text-xl">Create your own pixel art NFT.</p>
        </div>
        <div className="rounded-md text-center  p-5 px-7 space-y-2">
          <p>
            <MdSell className="text-light-purple text-7xl m-auto" />
          </p>

          <p className="text-light-gray text-2xl font-bold">SELL</p>
          <p className="text-light-gray text-xl">Sell your NFT bundlle's.</p>
        </div>
        <div className="rounded-md text-center  p-5 px-7 space-y-2">
          <p>
            <GiCash className="text-light-purple text-7xl m-auto" />
          </p>
          <p className="text-light-gray text-2xl font-bold">BUY</p>
          <p className="text-light-gray text-xl">Buy NFT bundles created by others.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
