import React, { useEffect } from 'react';
import Editor from './Components/Editor';
import Navbar from './Components/Navbar';
import Head from 'next/head';

export default function Create() {
  return (
    <div className="w-full h-screen bg-black">
      <Head>
        <title>Create NFT</title>
      </Head>
      <Navbar />
      <Editor />
    </div>
  );
}
