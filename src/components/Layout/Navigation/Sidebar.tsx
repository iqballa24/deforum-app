import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlinePlus,
} from 'react-icons/ai';

import Settings from '@/components/Settings';
import FormAddThreads from '@/components/Form/FormAddThread';
import { Button, Modal } from '@/components/UI';
import menus from '@/constant/menus';
import { RootState } from '@/lib/types';
import { uiActions } from '@/store/ui';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { showModalAddThread, showModalSettings, language } = useSelector(
    (state: RootState) => state.ui
  );

  const toggleModalAddThread = () => {
    dispatch(uiActions.toggleModalAddThread());
  };

  const toggleModalSettings = () => {
    dispatch(uiActions.toggleModalSettings());
  };

  const classNavLink =
    'flex flex-row items-center px-5 py-3 cursor-pointer space-x-5 whitespace-nowrap rounded hover:text-primary transition-all justify-center md:justify-start';
  const active =
    'bg-orange-light dark:bg-transparent text-primary border-l-2 border-primary';

  return (
    <React.Fragment>
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
              <span className="hidden md:block">
                {menu.name[language as keyof typeof menu.name]}
              </span>
            </NavLink>
          </li>
        ))}
        <li>
          <Button
            type="button"
            onClick={toggleModalAddThread}
            isPrimary
            isFull
            title={language === 'id' ? 'Tambah Thread' : 'Add Thread'}
          >
            <span className="hidden md:block">
              {language === 'id' ? 'Tambah Thread' : 'Add Thread'}
            </span>
            <AiOutlinePlus size={20} className="block md:hidden" />
          </Button>
        </li>
      </ul>
      <ul className="flex flex-col space-y-4">
        <li
          title={language === 'id' ? 'Pengaturan' : 'Settings'}
          className="flex flex-row items-center justify-center md:justify-start px-5 py-3 cursor-pointer rounded hover:text-primary"
          onClick={toggleModalSettings}
        >
          <AiOutlineSetting size={20} />
          <span className="hidden md:block md:pl-5">
            {language === 'id' ? 'Pengaturan' : 'Settings'}
          </span>
        </li>
        <li className="h-full flex items-end">
          <Button
            type="button"
            onClick={() => console.log('new thread')}
            isDanger
            isFull
            start
            title={language === 'id' ? 'Keluar' : 'Log out'}
          >
            <AiOutlineLogout size={20} />
            <span className="hidden md:block md:pl-5">
              {language === 'id' ? 'Keluar' : 'Log out'}
            </span>
          </Button>
        </li>
      </ul>
      {showModalAddThread && (
        <Modal
          contentModal={<FormAddThreads onClose={toggleModalAddThread} />}
          onClose={toggleModalAddThread}
        />
      )}
      {showModalSettings && (
        <Modal
          contentModal={<Settings onClose={toggleModalSettings} />}
          onClose={toggleModalSettings}
        />
      )}
    </React.Fragment>
  );
};

export default Sidebar;
