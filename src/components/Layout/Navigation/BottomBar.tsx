import React from 'react';
import { NavLink } from 'react-router-dom';
import menus from '@/constant/menus';

const BottomBar = () => {
  const classNavLink =
    'flex justify-center py-5 cursor-pointer hover:text-primary transition-all';
  const active = 'bg-orange-light dark:bg-transparent text-primary border-t-2 border-primary';

  return (
    <ul className="flex flex-row items-center w-full shadow-md">
      {menus.map((menu) => (
        <li key={menu.id} title={menu.name.en} className="flex-1">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              isActive ? `${classNavLink} ${active}` : `${classNavLink}`
            }
          >
            <menu.icon size={20} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default BottomBar;
