import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineComment } from 'react-icons/ai';
import { TypographyStylesProvider } from '@mantine/core';
import { Label, SpinBox, AvatarImage } from '@/components/UI';
import { truncateText, formatDistanceDate } from '@/utils';
import { ThreadCardProps } from '@/lib/types';

const ThreadCard: React.FC<ThreadCardProps> = ({
  thread,
  onUpVoteHandler,
  onDownVoteHandler,
}) => {
  const navigate = useNavigate();
  const body = truncateText(thread.body, 200);
  const date = formatDistanceDate(thread.createdAt);

  return (
    <li className="flex flex-row py-6 px-4 md:py-8 md:px-6 border mt-7 hover:-translate-y-1 transition-transform">
      <div className="w-1/12 flex flex-col justify-center items-center text-grey-light">
        <SpinBox
          id={thread.id}
          upVotesBy={thread.upVotesBy}
          downVotesBy={thread.downVotesBy}
          onUpVoteHandler={onUpVoteHandler}
          onDownVoteHandler={onDownVoteHandler}
        />
      </div>
      <div className="w-11/12 flex flex-col pl-2 space-y-3">
        <Label category={thread.category} />
        <h1
          title={thread.title}
          tabIndex={0}
          className="font-bold text-base cursor-pointer"
          onClick={() => navigate(`/detail/${thread.id}`)}
        >
          {thread.title}
        </h1>
        <TypographyStylesProvider>
          <div
            className="font-light pb-8 border-b text-grey-dark dark:text-white"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </TypographyStylesProvider>
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
          <div className="flex flex-row items-center space-x-2">
            <AvatarImage name={thread.owner?.name ?? 'User'} size={24} />
            <p className="text-sm">
              Posted By <em className="text-primary">{thread.owner?.name}</em> -{' '}
              {date}
            </p>
          </div>
          <div
            className="flex flex-row items-center space-x-3 cursor-pointer hover:text-primary"
            onClick={() => navigate(`/detail/${thread.id}`)}
          >
            <AiOutlineComment size={20} />
            <span className="text-sm">{thread.totalComments}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default React.memo(ThreadCard);
