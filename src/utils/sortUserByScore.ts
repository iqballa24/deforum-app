import { leaderBoardsItem } from 'lib/types';

export default function sortUserByScore(listUsers: leaderBoardsItem[]) {
  listUsers.sort(function (a, b) {
    return a.score - b.score;
  });

  return listUsers.reverse();
}
