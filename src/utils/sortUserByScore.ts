import { leaderBoardsItem } from 'lib/types';

export default function sortUserByScore(listUsers: leaderBoardsItem[]) {
  const sortUser = [...listUsers];
  sortUser.sort(function (a, b) {
    return a.score - b.score;
  });

  return sortUser.reverse();
}
