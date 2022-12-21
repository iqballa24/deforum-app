import {
  userTypes,
  leaderBoardsItem,
  detailThreadsTypes,
  threadTypes,
} from '@/lib/types';

export interface RootState {
  auth: { isLoggedin: boolean; user: userTypes };
  category: string[];
  leaderboards: { data: leaderBoardsItem[] };
  threadDetail: { data: detailThreadsTypes };
  threads: { data: threadTypes };
  users: { data: userTypes[] };
}
