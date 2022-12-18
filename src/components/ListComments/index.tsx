import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { formatDistanceDate } from '@/utils';
import { commentTypes } from '@/lib/types';
import { Button, SpinBox, AvatarImage } from '@/components/UI';

const ListComments = () => {
  const comments: commentTypes[] = useOutletContext();

  const inputCommentHandler = () => {
    console.log('tester');
  };

  return (
    <React.Fragment>
      <form className="space-y-5 ext">
        <div
          id="comment"
          contentEditable
          data-placeholder="Comments your reply"
          className="editable w-full min-h-[160px] text-sm md:text-base border dark:border-white p-5 mt-5"
          onInput={inputCommentHandler}
        ></div>
        <div className="flex justify-end">
          <Button
            type="submit"
            title="Send"
            isPrimary
            onClick={() => console.log('tester')}
          >
            Send
          </Button>
        </div>
      </form>
      <ul>
        {comments.map((comment: commentTypes) => {
          const score = comment.upVotesBy.length - comment.downVotesBy.length;
          return (
            <li key={comment.id} className="flex flex-row items-center my-10">
              <div className="w-2/12">
                <SpinBox score={score} />
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

export default ListComments;
