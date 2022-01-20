import React from 'react';
import Editor from './Components/Editor';
import Navbar from './Components/Navbar';
export default function Create() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Editor />
    </div>
  );
}
