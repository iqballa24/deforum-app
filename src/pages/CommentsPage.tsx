import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '../constant/transition';
import ThreadCard from '../components/ThreadCard';
import { SearchBar, EmptyState } from '../components/UI';

const CommentsPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <React.Fragment>
      <SearchBar value={searchValue} onSearchHandler={searchHandler} />
      <motion.div initial="initial" animate="animate" variants={pageMotion}>
        <EmptyState titleState="comments" />
      </motion.div>
    </React.Fragment>
  );
};

export default CommentsPage;
