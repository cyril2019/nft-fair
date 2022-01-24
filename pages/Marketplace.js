import Footer from './Components/Footer';
import ItemTileList from './Components/ItemTileList';
import Navbar from './Components/Navbar';

const marketplace = () => {
  return (
    <div className="w-full min-h-screen bg-black flex-col">
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
