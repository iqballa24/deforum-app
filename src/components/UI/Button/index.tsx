import React from 'react';
import { ButtonsProps } from 'lib/types';

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
  disabled,
}) => {
  const className = [
    'flex flex-row items-center px-6 py-2 text-white rounded transition-all justify-center',
  ];

  isPrimary && className.push('bg-primary hover:bg-orange-600');
  isDanger && className.push('bg-red hover:bg-red-600');
  isFull && className.push('w-full');
  start && className.push('md:justify-start');
  end && className.push('md:justify-end');
  disabled && className.push('opacity-75 hover:bg-primary');

  return (
    <button
      name={title}
      type={type}
      className={className.join(' ')}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
