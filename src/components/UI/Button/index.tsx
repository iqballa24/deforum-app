import React from 'react';
import { ButtonsProps } from 'lib/types/button';

const Button: React.FC<ButtonsProps> = ({
  children,
  type,
  onClick,
  title,
  isPrimary,
  isFull,
  isDanger,
  start,
  end,
}) => {
  const className = [
    'flex flex-row items-center w-full px-5 py-3 text-white rounded transition-all justify-center',
  ];

  isPrimary && className.push('bg-primary hover:bg-orange-600');
  isDanger && className.push('bg-red hover:bg-red-600');
  isFull && className.push('w-full');
  start && className.push('md:justify-start');
  end && className.push('md:justify-end');

  return (
    <button
      type={type}
      className={className.join(' ')}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
