import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import ThreadCard from '@/components/ThreadCard';
import { SearchBar } from '@/components/UI';
import { pageMotion } from '@/constant/transition';

import { asyncPopulateUsersAndThreads } from '@/store/shared/action';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';
import { threadItemTypes, userTypes } from '@/lib/types';
import { asyncUpVoteThread, asyncDownVoteThread } from '@/store/threads/action';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { threads, users, ui } = useAppSelector((state) => state);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(asyncPopulateUsersAndThreads());
      firstRender.current = false;
    }
  }, []);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const upVoteHandler = (id: string) => {
    dispatch(asyncUpVoteThread(id));
  };

  const downVoteHandler = (id: string) => {
    dispatch(asyncDownVoteThread(id));
  };

  const threadsList = threads.data
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

export default React.memo(HomePage);
