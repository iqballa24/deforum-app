import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-row flex-wrap justify-between mx-auto w-full max-w-[1200px] h-full px-5 md:px-10">{children}</div>;
};

export default Container;
