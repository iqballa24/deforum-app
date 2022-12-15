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
