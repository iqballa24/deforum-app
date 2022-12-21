import React from 'react';
import { useAppSelector } from '@/lib/hooks/useRedux';
import { Container, AvatarImage } from '@/components/UI';

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
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
          <AvatarImage name={user.name} size={44} />
          <div className="hidden md:flex flex-col">
            <p className="text-sm font-bold text-primary">{user.name}</p>
            <p className="text-xs font-light text-grey-dark dark:text-white">
              {user.email}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
