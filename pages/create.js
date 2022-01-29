import React, { useEffect } from 'react';
import Editor from './Components/Editor';
import Navbar from './Components/Navbar';
import { useWeb3 } from '@3rdweb/hooks';
export default function Create() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Editor />
    </div>
  );
}
