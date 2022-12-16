import React from 'react';

const Label: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="w-fit text-xs md:text-xs text-white bg-primary p-1 rounded">
      {name}
    </span>
  );
};

export default Label;
