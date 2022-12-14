import React from 'react';
import { useState } from 'react';
import Container from '../../UI/Container';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <header className="w-full bg-white dark:bg-bg-dark py-4 shadow-sm dark:shadow-xl">
      <Container>
        <nav className="w-full flex flex-row justify-between items-center">
          <div className="flex-1 flex flex-row items-center space-x-3">
            <img src="LOGO.svg" alt="logo deforum" className="max-w-[58px]" />
            <span className="font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EFAE63]">
              DEFORUM
            </span>
          </div>
          {isLoggedIn ? (
            <div className="flex-1 flex flex-row items-center justify-end space-x-3">
              <img
                src={`https://ui-avatars.com/api/?name=Iqbal+Nugraha&background=FF9315&color=fff`}
                alt="avatar"
                width="100%"
                className="rounded-full w-[44px]"
              />
              <div className="hidden md:flex flex-col space-y-1">
                <p className="text-xs font-bold text-primary">Iqbal Nugraha</p>
                <p className="text-xs font-light text-grey-dark dark:text-white">
                  iqbalnugraha347@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <p className='cursor-pointer'>Login</p>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
