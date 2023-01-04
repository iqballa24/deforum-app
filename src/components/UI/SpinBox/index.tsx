import React from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useAppSelector } from '@/lib/hooks/useRedux';
import { SpinBoxProps } from '@/lib/types';

const SpinBox: React.FC<SpinBoxProps> = ({
  id,
  upVotesBy,
  downVotesBy,
  onUpVoteHandler,
  onDownVoteHandler,
}) => {
  const { user } = useAppSelector((state) => state.auth);

  const isUserUpVote = upVotesBy.includes(user.id);
  const isUserDownVote = downVotesBy.includes(user.id);

  const onAddCounter = () => {
    if (!isUserUpVote) {
      onUpVoteHandler(id);
    }
  };

  const onSubtractCounter = () => {
    if (!isUserDownVote) {
      onDownVoteHandler(id);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button type="button" onClick={onAddCounter} aria-label="like button">
        <AiOutlineLike
          size={20}
          className={`hover:text-green-400 cursor-pointer ${
            isUserUpVote && 'text-green-400'
          }`}
        />
      </button>
      <span className="select-none">{upVotesBy.length}</span>
      <button type="button" onClick={onSubtractCounter} aria-label="dislike button">
        <AiOutlineDislike
          size={20}
          className={`hover:text-red cursor-pointer ${
            isUserDownVote && 'text-red'
          }`}
        />
      </button>
      <span className="select-none">{downVotesBy.length}</span>
    </div>
  );
};

export default React.memo(SpinBox);
