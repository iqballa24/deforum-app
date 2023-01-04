import React from 'react';
import { NavLink } from 'react-router-dom';
import menus from '@/constant/menus';
import { AiOutlinePlus } from 'react-icons/ai';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { uiActions } from '@/store/ui';

const BottomBar = () => {
  const dispatch = useAppDispatch();

  const classNavLink =
    'flex justify-center py-5 cursor-pointer hover:text-primary transition-all';
  const active =
    'bg-orange-light dark:bg-transparent text-primary border-t-2 border-primary';

  const toggleModalAddThread = () => {
    dispatch(uiActions.toggleModalAddThread());
  };

  return (
    <ul className="relative flex flex-row items-center w-full shadow-md">
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
      <li
        tabIndex={0}
        aria-label="add new thread"
        className="absolute right-5 -top-20 rounded-[50%] bg-primary hover:bg-orange-500  p-3 cursor-pointer"
        onClick={toggleModalAddThread}
      >
        <AiOutlinePlus size={20} />
      </li>
    </ul>
  );
};

export default React.memo(BottomBar);
