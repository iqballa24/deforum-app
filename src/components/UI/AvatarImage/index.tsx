import React from 'react';

const AvatarImage: React.FC<{ name: string; size: number }> = ({
  name,
  size,
}) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=${size}`}
      alt="avatar"
      width={'fit-content'}
      className={`rounded-full`}
    />
  );
};

export default AvatarImage;
