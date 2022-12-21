import React from 'react';
import { IconType } from 'react-icons/lib';

/*
  PROPS TYPES
*/

export interface ButtonsProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  title: string;
  disabled?: boolean;
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
  name: string;
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
  onUpVoteHandler: (id: string) => void;
  onDownVoteHandler: (id: string) => void;
}

export interface SpinBoxProps {
  id: string;
  upVotesBy: string[];
  downVotesBy: string[];
  onUpVoteHandler: (id: string) => void;
  onDownVoteHandler: (id: string) => void;
}

/*
  STATES
*/

export interface leaderBoardsItem {
  user: userTypes;
  score: number;
}

export interface threadTypes {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: string;
  ownerId: string;
  upVotesBy: string[];
  downVotesBy: string[];
}

export interface threadItemTypes extends threadTypes {
  totalComments: number;
  owner?: userTypes;
}

export interface detailThreadsTypes extends threadTypes {
  owner?: userTypes;
  comments: commentTypes[];
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

export type createThreadTypes = {
  title: string;
  body: string;
  category: string;
};

export type registerTypes = {
  name: string;
  email: string;
  password: string;
};

export interface FormRegisterTypes extends registerTypes {
  confirmPassword: string;
}

export interface FormLoginTypes {
  email: string;
  password: string;
}
