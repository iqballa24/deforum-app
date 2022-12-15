import React from 'react';
import { ProfileAvatarProps } from 'lib/types';

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ sizeAvatar, name }) => {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${name}&background=FF9315&color=fff`}
      alt={`avatar ${name}`}
      width="100%"
      className={`rounded-full w-[${sizeAvatar}px]`}
    />
  );
};

export default ProfileAvatar;
