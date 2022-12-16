import React from 'react';
import { InputProps } from 'lib/types';

const Input: React.FC<InputProps> = ({ placeholder, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full bg-transparent border-b p-2 focus:outline-none focus:border-b-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
