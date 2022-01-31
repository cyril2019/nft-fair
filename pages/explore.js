import Footer from './Components/Footer';
import CollectionList from './Components/CollectionList';
import Navbar from './Components/Navbar';
import Head from 'next/head';
const marketplace = () => {
  return (
    <div className="w-full h-full bg-black flex-col">
      <Head>
        <title>Explore</title>
      </Head>
      <Navbar />
      {/* marketplace body  */}
      <div className="w-full h-full  flex px-5 py-2 sm:px-10 sm:py-5 ">
        {/* market  */}
        <CollectionList />
      </div>
      <Footer />
    </div>
  );
};

export default marketplace;
