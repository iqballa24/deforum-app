import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { RootState } from '@/lib/types';
import { pageMotion } from '@/constant/transition';
import { SearchBar, EmptyState } from '@/components/UI';

const CommentsPage = () => {
  const { language } = useSelector((state: RootState) => state.ui);
  const [searchValue, setSearchValue] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <React.Fragment>
      <SearchBar value={searchValue} onSearchHandler={searchHandler} />
      <motion.div initial="initial" animate="animate" variants={pageMotion}>
        <EmptyState titleState={language === 'id' ? 'Komentar' : 'Comments'} />
      </motion.div>
    </React.Fragment>
  );
};

export default React.memo(CommentsPage);
