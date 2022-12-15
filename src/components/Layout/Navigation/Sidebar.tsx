import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../UI';
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlinePlus,
} from 'react-icons/ai';
import menus from '../../../constant/menus';

const Sidebar = () => {
  const classNavLink =
    'flex flex-row items-center px-5 py-3 cursor-pointer space-x-5 whitespace-nowrap rounded hover:text-primary transition-all justify-center md:justify-start';
  const active = 'bg-orange-light text-primary border-l-2 border-primary';

  return (
    <>
      <ul className="flex flex-col space-y-4 h-full">
        <li className="md:px-5 pb-3 font-bold text-center md:text-left">
          Menu
        </li>
        {menus.map((menu) => (
          <li key={menu.id} title={menu.name.en}>
            <NavLink
              to={menu.path}
              className={({ isActive }) =>
                isActive ? `${classNavLink} ${active}` : `${classNavLink}`
              }
            >
              <menu.icon size={20} />
              <span className="hidden md:block">{menu.name.en}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <Button
            type="button"
            onClick={() => console.log('new thread')}
            isPrimary
            isFull
            title="New Thread"
          >
            <span className="hidden md:block">New Thread</span>
            <AiOutlinePlus size={20} className="block md:hidden" />
          </Button>
        </li>
      </ul>
      <ul className="flex flex-col space-y-4">
        <li
          className="flex flex-row items-center justify-center md:justify-start px-5 py-3 cursor-pointer rounded hover:text-primary"
          title="Settings"
        >
          <AiOutlineSetting size={20} />
          <span className="hidden md:block md:pl-5">Settings</span>
        </li>
        <li className="h-full flex items-end">
          <Button
            type="button"
            onClick={() => console.log('new thread')}
            isDanger
            isFull
            start
            title="Log out"
          >
            <AiOutlineLogout size={20} />
            <span className="hidden md:block md:pl-5">Log out</span>
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
