import React from 'react';
import AvatarImage from '../AvatarImage';
import { AiFillFire } from 'react-icons/ai';
import { ItemTopUserProps } from 'lib/types';

const ItemTopUser: React.FC<ItemTopUserProps> = ({ name, score, fontSize }) => {
  return (
    <li
      className={`flex flex-row items-center justify-between whitespace-nowrap text-${fontSize} cursor-default`}
      title={name}
    >
      <div className="w-9/12 flex flex-row items-center space-x-2">
        <AvatarImage name={name} size={24} />
        <span className="text-primary overflow-hidden whitespace-nowrap truncate">
          {name}
        </span>
      </div>
      <div className="w-3/12 flex flex-row justify-end items-center space-x-1">
        <span>{score}</span>
        <AiFillFire className="text-primary" />
      </div>
    </li>
  );
};

export default ItemTopUser;
