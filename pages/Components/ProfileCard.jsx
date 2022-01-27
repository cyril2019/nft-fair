import { Avatar, Divider } from '@chakra-ui/react';
import React from 'react';

export default function ProfileCard() {
  return (
    <div className="w-full flex items-center justify-center bg-gray text-white rounded-lg flex-col py-8 px-6">
      <Avatar size="2xl" className="mb-8" />
      <p className="mb-2 text-light-gray">0x6163...f2E70</p>
      <h1 className="mb-2 text-4xl">Charles V J</h1>
      <h4 className="mb-2 text-light-purple">@charlesvj</h4>
      <h3 className="mb-2 mt-4 text-2xl">Biography</h3>
      <p className="text-center text-xs  text-light-gray mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatum, error totam
        excepturi eum deserunt distinctio, nulla inventore facere dolores voluptatibus adipisci,
        minima corrupti illum?
      </p>
      <Divider />
      <p className="text-center text-xs  text-light-purple mt-2">Joined January 2022</p>
    </div>
  );
}
