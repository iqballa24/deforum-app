import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { leaderBoardsItem } from 'lib/types';

import { WrapperCard, ItemTopUser } from '@/components/UI';
import leaderboards from '@/constant/leaderboards';
import { sortUserByScore } from '@/utils';

const TopUsersCard = () => {
  const [sliceUsers, setSliceUsers] = useState<leaderBoardsItem[]>([]);
  const filterUser = sortUserByScore(leaderboards);
  const onFirstRender = useRef(true);

  useEffect(() => {
    if (onFirstRender.current) {
      setSliceUsers(filterUser.splice(0, 5));
      onFirstRender.current = false;
    }
  }, []);

  return (
    <WrapperCard>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold mb-5 text-sm">Top Users</h1>
        <Link to="leaderboards" className="underline text-blue-700">
          See all
        </Link>
      </div>
      <ul className="flex flex-col space-y-3">
        {sliceUsers.map((item) => (
          <ItemTopUser
            key={item.user.id}
            name={item.user.name}
            score={item.score}
            fontSize='sm'
          />
        ))}
      </ul>
    </WrapperCard>
  );
};

export default React.memo(TopUsersCard);
