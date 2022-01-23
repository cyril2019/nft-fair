import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import {
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { toPng } from 'html-to-image';
import { FiEdit2 } from 'react-icons/fi';
import { ThirdwebSDK } from '@3rdweb/sdk';


// const module = sdk.getNFTModule("0x174F232AC83Cc1b13F2c42cE914783B62a23Aa59");

export default function Editor() {
  const height = 32;
  const width = 32;
  const [color, setColor] = useState('#808080');
  const [mouseDown, setMouseDown] = useState(false);
  // const [menuVisible, setMenuVisible] = useState(true);
  const [background, setBackground] = useState('#fff');
  const [previewLoad, setPreviewLoad] = useState(false);
  const [showimg, setShowimg] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    initializeGrid();
  }, []);

//   const mint = async () => {
//     const toAddress = "0x6163f5017C5220c87c0d765ab7143157040f2E70"

//     let img = document.getElementById('preimg').src

// // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
//     const metadata = {
//       name: "Cool NFT",
//       description: "This is a cool NFT",
//       image: img, // This can be an image url or file
//     }

//     await module.mintTo(toAddress, metadata);
//     console.log('hello')
//   }


const mint = async () => {
  // make a backend server api request to mint an NFT
  const account = "0x8C1Bb3819E244F0868440dFc6517AFf16627613B"
  let img = document.getElementById('preimg').src
  await fetch("/api/mint", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ account, img }),
  });
};

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
    console.log('here');
    initializeGrid();
  };

  const previewNFT = () => {
    setPreviewLoad(true);
    let node = document.getElementById('pixel_canvas');
    let getImg = document.getElementById('preview');
    toPng(node)
      .then(function (dataURL) {
        let img = new Image();
        let preImg = document.getElementById('preimg');
        setShowimg(true);
        preImg.src = dataURL;
        img.src = dataURL;
        img.style.visibility = 'visible';
        // console.log(count);
        // if (count == 2) {
        //   remove(getImg.childNodes);
        // }
        setPreviewLoad(false);
        // document.getElementById('preview').appendChild(img);
      })
      .catch(function (error) {
        setPreviewLoad(false);
        console.log('Error');
      });
  };
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-8 px-8 my-6 bg-black rounded-lg drop-shadow-lg">
        <div className="max-w-2xl" id="hell">
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
          <button
            className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black"
            onClick={() => clearGrid()}
          >
            Clear grid
          </button>
          <button
            className="border-2 border-solid border-purple px-2 py-1 rounded-md font-bold bg-purple hover:bg-black"
            onClick={() => {
              onOpen();
              previewNFT();
            }}
          >
            Proceed
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: 'black' }}>
          <ModalHeader>Preview NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div id="preview">
              {previewLoad ? <Spinner /> : <></>}
              <img alt="" id="preimg"></img>
            </div>
          </ModalBody>
          {/* <ModalBody>Blah nininiieimdie</ModalBody> */}

          <ModalFooter>
            <Button leftIcon={<FiEdit2 />} variant="outline" mr={3} onClick={onClose}>
              Edit
            </Button>
            <Button variant="outline" onClick={mint}>Mint ✨</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
