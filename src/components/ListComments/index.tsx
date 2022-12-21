import React from 'react';
import ThreadCard from '@/components/ThreadCard';
import { Button } from '@/components/UI';

const ListComments = () => {
  const inputCommentHandler = () => {
    console.log('tester');
  };

  return (
    <React.Fragment>
      <ul>
        <ThreadCard shortenBody={false} bordered />
        <ThreadCard shortenBody={false} bordered />
        <ThreadCard shortenBody={false} bordered />
        <ThreadCard shortenBody={false} bordered />
        <ThreadCard shortenBody={false} bordered />
      </ul>
      <form className="space-y-5 ext">
        <div
          id="comment"
          contentEditable
          data-placeholder="Comments your reply"
          className="editable w-full min-h-[120px] text-sm md:text-base border-t border-b dark:border-white p-5 mt-5"
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
    </React.Fragment>
  );
};

export default ListComments;
