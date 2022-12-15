import React from 'react';

const WrapperCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col rounded p-5 text-xs bg-orange-light dark:bg-transparent">
      {children}
    </div>
  );
};

export default WrapperCard;
