import React from 'react';
import { uiActions } from '@/store/ui';
import { unsetAuthUser } from '@/store/auth/action';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { Container, AvatarImage } from '@/components/UI';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';

const Header = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);

  const toggleModalSettings = () => {
    dispatch(uiActions.toggleModalSettings());
  };

  const logoutHandler = () => {
    dispatch(unsetAuthUser());
  };

  return (
    <header className="w-full flex flex-row justify-between items-center bg-white dark:bg-bg-dark py-4 shadow-sm dark:shadow-xl">
      <Container>
        <div className="flex-1 flex flex-row items-center md:space-x-3">
          <img
            src="/LOGO.svg"
            alt="logo deforum"
            className="max-w-[58px] hidden md:block"
          />
          <span className="font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EFAE63]">
            DEFORUM
          </span>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end space-x-3">
          <div className="relative group cursor-pointer sm:cursor-default">
            <AvatarImage name={auth.user.name} size={44} />
            <div className="hidden group-hover:flex group-hover:sm:hidden flex-col absolute top-0 right-0 z-10">
              <div className="h-[58px] bg-transparent"></div>
              <div className="flex flex-col bg-white dark:bg-bg-dark w-full p-5 rounded space-y-5">
                <div
                  className="flex flex-row items-center space-x-5 hover:text-primary cursor-pointer"
                  onClick={toggleModalSettings}
                >
                  <AiOutlineSetting size={18} title="Settings" />
                  <span className="text-sm">Settings</span>
                </div>
                <div
                  className="flex flex-row items-center space-x-5 hover:text-red cursor-pointer"
                  onClick={logoutHandler}
                >
                  <AiOutlineLogout size={18} title="Log out" />
                  <span className="text-sm">Log out</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-bold text-primary">{auth.user.name}</p>
            <p className="text-xs font-light text-grey-dark dark:text-white">
              {auth.user.email}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default React.memo(Header);
