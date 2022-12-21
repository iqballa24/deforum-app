import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { formatDistanceDate } from '@/utils';
import { commentTypes } from '@/lib/types';
import { SpinBox, AvatarImage } from '@/components/UI';
import FormComment from '@/components/Form/FormComment';

import { useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncUpVoteComment, asyncDownVoteComment } from '@/store/threadDetail/action';

const CommentsListPage = () => {
  const dispatch = useAppDispatch();
  const comments: commentTypes[] = useOutletContext();

  const upVoteHandler = (id: string) => {
    dispatch(asyncUpVoteComment(id));
  };

  const downVoteHandler = (id: string) => {
    dispatch(asyncDownVoteComment(id));
  };

  return (
    <React.Fragment>
      <FormComment />
      <ul>
        {comments.map((comment: commentTypes) => {
          return (
            <li key={comment.id} className="flex flex-row items-center my-10">
              <div className="w-2/12">
                <SpinBox
                  id={comment.id}
                  upVotesBy={comment.upVotesBy}
                  downVotesBy={comment.downVotesBy}
                  onUpVoteHandler={upVoteHandler}
                  onDownVoteHandler={downVoteHandler}
                />
              </div>
              <div className="w-10/12 flex flex-col space-y-3">
                <div
                  className="font-light pb-8"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                ></div>
                <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
                  <div className="flex flex-row items-center space-x-2">
                    <AvatarImage
                      name={comment.owner?.name ?? 'User'}
                      size={24}
                    />
                    <div className="flex flex-col text-sm">
                      <p>
                        Posted By{' '}
                        <em className="text-primary">{comment.owner?.name}</em>
                      </p>
                      <time>{formatDistanceDate(comment.createdAt)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default CommentsListPage;
