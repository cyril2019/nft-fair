import { Avatar, Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BiCopy } from 'react-icons/bi';
export default function ProfileCard(props) {
  const [src, setSrc] = useState();
  useEffect(() => {
    setSrc(`https://gradient-avatar.glitch.me/${props.address}`);
  }, []);
  return (
    <div className="w-full flex items-center justify-center bg-gray text-white rounded-lg flex-col py-8 px-6">
      <Avatar size="2xl" className="mb-8" src={src} />
      <p>Address</p>
      <div className="p-2 flex items-center space-x-2">
        <p className="text-lg text-light-purple">
          {' '}
          {props.address.substring(0, 6) +
            '...' +
            props.address.substring(props.address.length - 4)}
        </p>
        <BiCopy
          className="cursor-pointer  hover:text-dark-purple"
          onClick={() => {
            navigator.clipboard.writeText(props.address);
          }}
        />
      </div>
      {/* <Divider /> */}
    </div>
  );
}
