import React, { useEffect, useState } from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import { Outlet, Link, useParams } from 'react-router-dom';
import { AiOutlineComment, AiOutlineArrowLeft } from 'react-icons/ai';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncReceiveThreadDetail } from '@/store/threadDetail/action';
import { AvatarImage } from '@/components/UI';
import { formatDistanceDate } from '@/utils';

const DetailThread = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.threadDetail);
  const { threadId } = useParams();
  const [isCommentClicked, setIsCommentClicked] = useState(false);

  useEffect(() => {
    if (threadId) dispatch(asyncReceiveThreadDetail(threadId));
  }, [dispatch, threadId]);

  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <Link
        to="/threads"
        className="flex flex-row items-center space-x-3 hover:space-x-1 cursor-pointer w-fit"
      >
        <AiOutlineArrowLeft size={20} />
        <span className="transition-all">Back</span>
      </Link>
      <div className="my-10">
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-base cursor-pointer">{data.title}</h1>
          <TypographyStylesProvider>
            <div
              className="font-light pb-8 text-grey-dark dark:text-white"
              dangerouslySetInnerHTML={{ __html: data.body }}
            />
          </TypographyStylesProvider>
          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
            <div className="flex flex-row items-center space-x-2">
              <AvatarImage name={data.owner?.name ?? 'User'} size={24} />
              <div className="flex flex-col text-sm">
                <p>
                  Posted By <em className="text-primary">{data.owner?.name}</em>
                </p>
                <time>{formatDistanceDate(data.createdAt)}</time>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <AiOutlineComment size={20} />
              <span className="text-sm">{data.comments.length}</span>
            </div>
          </div>
        </div>
      </div>
      {!isCommentClicked && (
        <div
          className="my-5 text-center"
          onClick={() => setIsCommentClicked(true)}
        >
          <hr className="mb-5" />
          <Link to="comments" className="underline">
            Load comments
          </Link>
        </div>
      )}
      <Outlet context={data.comments} />
    </React.Fragment>
  );
};

export default React.memo(DetailThread);
