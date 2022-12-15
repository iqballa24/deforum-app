import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { ItemTopUserProps } from 'lib/types';

const ItemTopUser: React.FC<ItemTopUserProps> = ({ name, score }) => {
  return (
    <li className="flex flex-row items-center justify-between whitespace-nowrap">
      <div className="w-9/12 flex flex-row items-center space-x-2">
        <img
          src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff`}
          alt="avatar"
          width="100%"
          className="rounded-full w-[24px]"
        />
        <span className="text-primary text-xs overflow-hidden whitespace-nowrap truncate">{name}</span>
      </div>
      <div className="w-3/12 flex flex-row justify-end items-center space-x-1">
        <span>{score}</span>
        <AiFillFire size={20} className="text-primary" />
      </div>
    </li>
  );
};

export default ItemTopUser;
