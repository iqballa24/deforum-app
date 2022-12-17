import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineComment,
  AiOutlineBarChart,
} from 'react-icons/ai';

import { menuTypes } from '@/lib/types';

const menus: menuTypes[] = [
  {
    id: 1,
    name: { en: 'Home', id: 'Beranda' },
    icon: AiOutlineHome,
    path: '/threads',
  },
  {
    id: 2,
    name: { en: 'My Threads', id: 'Threads Saya' },
    icon: AiOutlineFire,
    path: '/my-threads',
  },
  {
    id: 3,
    name: { en: 'My Comments', id: 'Komentar Saya' },
    icon: AiOutlineComment,
    path: '/my-comments',
  },
  {
    id: 4,
    name: { en: 'Leaderboards', id: 'Papan Peringkat' },
    icon: AiOutlineBarChart,
    path: '/leaderboards',
  },
];

export default menus;
