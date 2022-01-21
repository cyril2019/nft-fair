import React from 'react';

const CustomBtn = (props) => {
  return (
    <button className="border-2 border-solid  px-2 py-1 rounded-md font-bold bg-purple border-purple hover:bg-black">
      {props.text}
    </button>
  );
};

export default CustomBtn;
