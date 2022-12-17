import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { RootState } from '@/lib/types';
import { ItemTopUser } from '../components/UI';
import leaderboards from '../constant/leaderboards';
import { pageMotion } from '../constant/transition';
import sortUserByScore from '../utils/sortUserByScore';

const LeaderboardPage = () => {
  const { language } = useSelector((state: RootState) => state.ui);
  const sortUsersScore = sortUserByScore(leaderboards);
  return (
    <React.Fragment>
      <h1 className="font-bold text-base text-center mb-8">
        {language === 'id'
          ? 'Papan Peringkat Pengguna Aktif'
          : 'Leaderboards Top Active Users'}
      </h1>
      <motion.ul
        initial="initial"
        animate="animate"
        variants={pageMotion}
        className="space-y-5"
      >
        {sortUsersScore.map((item) => (
          <ItemTopUser
            key={item.user.id}
            name={item.user.name}
            score={item.score}
            fontSize="base"
          />
        ))}
      </motion.ul>
    </React.Fragment>
  );
};

export default React.memo(LeaderboardPage);
