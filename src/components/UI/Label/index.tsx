import React from 'react';

const Label: React.FC<{ category: string }> = ({ category }) => {
  return (
    <label className="w-fit text-xs md:text-xs text-white bg-primary p-1 rounded">
      {category}
    </label>
  );
};

export default Label;
