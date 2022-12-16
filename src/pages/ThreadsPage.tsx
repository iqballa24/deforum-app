import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThreadCard from '../components/ThreadCard';
import { SearchBar } from '../components/UI';
import { pageMotion } from '../constant/transition';

const ThreadPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <React.Fragment>
      <SearchBar value={searchValue} onSearchHandler={searchHandler} />
      <motion.ul initial="initial" animate="animate" variants={pageMotion}>
        <ThreadCard shortenBody bordered />
      </motion.ul>
    </React.Fragment>
  );
};

export default ThreadPage;
