import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { pageMotion } from '@/constant/transition';
import { SearchBar, EmptyState } from '@/components/UI';

import { useAppSelector } from '@/lib/hooks/useRedux';

const CommentsPage = () => {
  const { language } = useAppSelector((state) => state.ui);
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
