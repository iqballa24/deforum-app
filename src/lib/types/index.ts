import React from 'react';
import { IconType } from 'react-icons/lib';

/*
  PROPS TYPES
*/

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

export interface ThreadCardProps {
  thread: threadItemTypes;
}

/*
  STATES
*/

export interface leaderBoardsItem {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  score: number;
}

export interface threadItemTypes {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  ownerId: string;
  upVotesBy: string[];
  downVotesBy: string[];
  totalComments: number;
  owner?: userTypes;
}

export interface commentTypes {
  id: string;
  content: string;
  createdAt: string;
  owner: userTypes;
  upVotesBy: string[];
  downVotesBy: string[];
}

export interface userTypes {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface langTypes {
  en: string;
  id: string;
}

export interface menuTypes {
  id: number;
  name: langTypes;
  icon: IconType;
  path: string;
}
