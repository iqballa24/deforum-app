import React from 'react';
import { IconType } from 'react-icons/lib';

export interface ButtonsProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  title: string;
  isPrimary?: boolean;
  isFull?: boolean;
  isDanger?: boolean;
  onClick: () => void;
  start?: boolean;
  center?: boolean;
  end?: boolean;
}

export interface ItemTopUserProps {
  name: string;
  score: number;
  fontSize: string;
}

export interface leaderBoardsItem {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  score: number;
}

export interface SearchBarProps {
  value: string;
  onSearchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps {
  placeholder: string;
  type: string;
}

export interface ButtonSwitchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  icon: {
    iconLeft: IconType;
    iconRight: IconType;
  };
}
