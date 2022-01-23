import { Button, ButtonSpinner } from '@chakra-ui/button';
import CustomBtn from './Components/CustomBtn';
import Navbar from './Components/Navbar';
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
        <div className="w-10/12  p-5">
          <img
            className="rounded-xl"
            src="https://i.etsystatic.com/18906228/r/il/b16c74/2376310773/il_fullxfull.2376310773_l0ai.jpg"
          />
        </div>
      </div>
      <div className="p-5 sm:p-0">
        <p className="text-2xl font-semibold text-center text-light-gray">Things you can do</p>
      </div>
      <div className="w-full grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center p-5">
        <div className="w-1/3 rounded-md bg-light-gray"></div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}
