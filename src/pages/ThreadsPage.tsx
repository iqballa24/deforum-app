import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import ThreadCard from '@/components/ThreadCard';
import { SearchBar, EmptyState } from '@/components/UI';
import { pageMotion } from '@/constant/transition';

import { asyncPopulateUsersAndThreads } from '@/store/shared/action';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { threadItemTypes, userTypes } from '@/lib/types';
import { asyncUpVoteThread, asyncDownVoteThread } from '@/store/threads/action';

const ThreadPage = () => {
  const dispatch = useAppDispatch();
  const { ui, auth, threads, users } = useAppSelector((state) => state);
  const [searchValue, setSearchValue] = useState('');
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(asyncPopulateUsersAndThreads());
      firstRender.current = false;
    }
  }, []);

  const upVoteHandler = (id: string) => {
    dispatch(asyncUpVoteThread(id));
  };

  const downVoteHandler = (id: string) => {
    dispatch(asyncDownVoteThread(id));
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const threadsList = threads.data
    .filter((thread: threadItemTypes) => thread.ownerId === auth.user.id)
    .filter((thread: threadItemTypes) =>
      thread.category.toLowerCase().includes(ui.queryCategory.toLowerCase())
    )
    .filter((thread: threadItemTypes) =>
      thread.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((thread: threadItemTypes) => ({
      ...thread,
      owner: users.data.find((user: userTypes) => user.id === thread.ownerId),
    }));

  return (
    <React.Fragment>
      <SearchBar value={searchValue} onSearchHandler={searchHandler} />
      {threadsList.length === 0 && searchValue.length === 0 && (
        <EmptyState titleState="thread" />
      )}
      {threadsList.length === 0 && searchValue.length > 0 && (
        <p className="text-center py-10">
          {ui.language === 'id'
            ? `Thread dengan judul "${searchValue}" tidak ditemukan`
            : `Thread with the title "${searchValue}" not found`}
        </p>
      )}
      <motion.ul initial="initial" animate="animate" variants={pageMotion}>
        {threadsList.map((thread: threadItemTypes) => (
          <ThreadCard
            key={thread.id}
            thread={{ ...thread }}
            onUpVoteHandler={upVoteHandler}
            onDownVoteHandler={downVoteHandler}
          />
        ))}
      </motion.ul>
    </React.Fragment>
  );
};

export default React.memo(ThreadPage);
