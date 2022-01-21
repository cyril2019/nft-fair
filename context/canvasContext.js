import React, { useContext, useState, createContext, useEffect, useRef } from 'react';

// @ts-ignore
const GridContext = createContext();

const GridContextProvider = ({ children }) => {
  const [gridSize, setGridSize] = useState();
  const [createView, setCreateView] = useState('grid-selector');
  const [colorGrid, setColorGrid] = useState([]);
  const [selectedCell, setSelectedCell] = useState([0, 0]);
  const [preview, setPreview] = useState(false);
  const gridRef = useRef();

  const onGridSizeSelected = () => {
    if (!gridSize) return;
    setCreateView('design');
    initializeGrid();
  };

  const initializeGrid = () => {
    if (!gridSize) return;
    const gridArray = [];
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let i = 0; i < gridSize; i++) {
        row.push('');
      }
      gridArray.push(row);
    }
    setColorGrid(gridArray);
  };

  //   const colorCell = (row, col, color) => {
  //     const gridArray = colorGrid.slice();
  //     gridArray[row][col] = color;
  //     setColorGrid(gridArray);
  //   };

  const clearGrid = () => {
    initializeGrid();
  };

  const renderCanvas = (canvasRef) => {
    const dimension = 448 / 32;
    const canvas = canvasRef !== null ? canvasRef.current : null;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      colorGrid.forEach((row, i) => {
        row.forEach((cell, j) => {
          ctx.fillStyle = cell || 'white';
          ctx.fillRect(j * dimension, i * dimension, dimension, dimension);
        });
      });
    }
  };

  const ctxProps = {
    gridSize,
    setGridSize,
    createView,
    setCreateView,
    selectedCell,
    setSelectedCell,
    preview,
    setPreview,
    colorGrid,
    clearGrid,
    // colorCell,
    // onGridSizeSelected,
    renderCanvas,
    gridRef,
  };

  return <GridContext.Provider value={ctxProps}>{children}</GridContext.Provider>;
};

const useGridContext = () => useContext(GridContext);

export { GridContextProvider, useGridContext };
