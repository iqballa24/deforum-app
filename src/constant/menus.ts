import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineComment,
  AiOutlineBarChart,
} from 'react-icons/ai';

const menus = [
  {
    id: 1,
    name: { en: 'Home', id: 'Beranda' },
    icon: AiOutlineHome,
    path: '/',
    active: true,
  },
  {
    id: 2,
    name: { en: 'My Threads', id: 'Threads Saya' },
    icon: AiOutlineFire,
    path: '/my-threads',
    active: false,
  },
  {
    id: 3,
    name: { en: 'My Comments', id: 'Komentar Saya' },
    icon: AiOutlineComment,
    path: '/my-comments',
    active: false,
  },
  {
    id: 4,
    name: { en: 'Leaderboards', id: 'Peringkat' },
    icon: AiOutlineBarChart,
    path: '/leaderboards',
    active: false,
  },
];

export default menus;
