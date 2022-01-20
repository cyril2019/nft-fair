import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Box } from '@chakra-ui/react';
export default function Editor() {
  const height = 32;
  const width = 32;
  const [color, setColor] = useState('#808080');
  const [mouseDown, setMouseDown] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const [background, setBackground] = useState('#fff');
  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const canvas = document.querySelector('#pixel_canvas');
    canvas.innerHTML = '';
    // this.setState({ background: "#fff" });

    for (let x = 0; x < height; x++) {
      let row = document.createElement('tr');
      canvas.appendChild(row);

      for (let y = 0; y < width; y++) {
        // console.log('wid');
        let cell = document.createElement('td');
        cell.style.cssText = 'border:1px inset #80808020';
        cell.className = 'h-5 w-5';
        row.appendChild(cell);
      }
    }
  };
  const handleCellColorOnClick = (event) => {
    event.target.style.backgroundColor = color;
    setMouseDown(true);
  };

  const handleMouseState = () => {
    setMouseDown(false);
  };

  // Remove color
  const handleColorRemove = (event) => {
    event.target.style.backgroundColor = '';
  };

  const clearGrid = () => {
      console.log('here')
      initializeGrid();
  }
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-8 px-8 my-6 bg-black rounded-lg drop-shadow-lg">
        <div className="max-w-2xl">
          <SketchPicker
            // @ts-ignore
            width={350}
            className={`h-full hidden sm:block `}
            disableAlpha={true}
            color={color}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>
        <table
          id="pixel_canvas"
          // ref={componentRef}
          style={{ backgroundColor: background }}
          onMouseDown={handleCellColorOnClick}
          onMouseMove={mouseDown ? handleCellColorOnClick : null}
          onMouseUp={handleMouseState}
          onMouseLeave={handleMouseState}
          onTouchStart={handleCellColorOnClick}
          onTouchMove={mouseDown ? handleCellColorOnClick : null}
          onTouchEnd={handleMouseState}
          onDoubleClick={handleColorRemove}
        ></table>
        <div className="flex flex-col md:flex-1 space-y-6">
          <button className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black" onClick={() => clearGrid()}>
            Clear grid
          </button>
          <button className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black">
            Mint
          </button>
        </div>
      </div>
    </>
  );
}
