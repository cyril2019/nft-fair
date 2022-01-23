import { Button, ButtonSpinner } from '@chakra-ui/button';
import Navbar from './Components/Navbar';
export default function Home() {
  return (
    <div className="w-full  bg-black flex flex-col">
      <Navbar />
      <div className="w-full grow grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        {/* left side  */}
        <div className="text-light-gray min-h-screen flex items-center">
          <div className="m-auto">
            <p className="text-3xl text-white font-black p-3">
              Create, Discover, Buy and Sell NFT{' '}
            </p>
          </div>
        </div>
        {/* right side  */}
        <div>
          <p>pic</p>
        </div>
      </div>
    </div>
  );
}
