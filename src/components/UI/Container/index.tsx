import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex mx-auto w-full max-w-6xl h-full px-5 md:px-10">{children}</div>;
};

export default Container;
