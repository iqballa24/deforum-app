import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { leaderBoardsItem } from 'lib/types';

import { sortUserByScore } from '@/utils';
import { WrapperCard, ItemTopUser } from '@/components/UI';

import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncReceiveLeaderboards } from '@/store/leaderboards/action';

const TopUsersCard = () => {
  const dispatch = useAppDispatch();
  const { ui, leaderboards } = useAppSelector((state) => state);
  const filterUser = sortUserByScore(leaderboards.data);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    if (firstRender.current) {
      dispatch(asyncReceiveLeaderboards());
      firstRender.current = false;
    }
  }, []);

  return (
    <WrapperCard>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold mb-5 text-sm">
          {ui.language === 'id' ? 'Pengguna Teratas' : 'Top Users'}
        </h1>
        <Link to="leaderboards" className="underline text-blue-700">
          See all
        </Link>
      </div>
      <ul className="flex flex-col space-y-3">
        {filterUser.splice(0, 5).map((item: leaderBoardsItem) => (
          <ItemTopUser
            key={item.user.id}
            name={item.user.name}
            score={item.score}
            fontSize="sm"
          />
        ))}
      </ul>
    </WrapperCard>
  );
};

export default React.memo(TopUsersCard);
