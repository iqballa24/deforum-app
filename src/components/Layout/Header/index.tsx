import React from 'react';
import { useState } from 'react';
import { Container, AvatarImage } from '@/components/UI';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
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
        {isLoggedIn ? (
          <div className="flex-1 flex flex-row items-center justify-end space-x-3">
            <AvatarImage name="Iqbal Nugraha" size={44} />
            <div className="hidden md:flex flex-col space-y-1">
              <p className="text-xs font-bold text-primary">Iqbal Nugraha</p>
              <p className="text-xs font-light text-grey-dark dark:text-white">
                iqbalnugraha347@gmail.com
              </p>
            </div>
          </div>
        ) : (
          <p className="cursor-pointer">Login</p>
        )}
      </Container>
    </header>
  );
};

export default Header;
