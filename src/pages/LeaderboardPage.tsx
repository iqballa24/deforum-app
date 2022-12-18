import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/useRedux';

import { ItemTopUser } from '@/components/UI';
import { pageMotion } from '@/constant/transition';
import sortUserByScore from '@/utils/sortUserByScore';
import { asyncReceiveLeaderboards } from '@/store/leaderboards/action';

const LeaderboardPage = () => {
  const dispatch = useAppDispatch();
  const { ui, leaderboards } = useAppSelector((state) => state);
  const sortUsersScore = sortUserByScore(leaderboards.data);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(asyncReceiveLeaderboards());
      firstRender.current = false;
    }
  }, []);

  return (
    <React.Fragment>
      <h1 className="font-bold text-base text-center mb-8">
        {ui.language === 'id'
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
