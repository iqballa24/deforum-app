import React from 'react';
import Header from './Header';
import { Sidebar, BottomBar } from './Navigation/';
import LoadingBar from 'react-redux-loading-bar';

import PopularCard from '@/components/PopularCard';
import TopUsersCard from '@/components/TopUsersCard';
import { Container } from '@/components/UI';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <LoadingBar className="absolute bg-primary h-[2px]"/>
      <main className="py-8 h-full">
        <Container>
          <nav
            className="hidden sm:flex flex-col sm:w-2/12 md:w-3/12 h-full max-w-[230px]"
            aria-label="Primary"
          >
            <Sidebar />
          </nav>
          <section
            className="w-full h-[605px] pb-36 sm:pb-0 sm:px-5 sm:w-10/12 md:w-6/12 overflow-y-scroll scrollbar-hide z-0"
            role="main"
          >
            {children}
          </section>
          <section className="hidden md:flex flex-col w-3/12 space-y-5">
            <PopularCard />
            <TopUsersCard />
          </section>

          {/* SHOW ONLY ON SMALL DEVICE */}
          <section
            className="fixed bg-white dark:bg-bg-dark w-full left-0 right-0 bottom-0 sm:hidden z-10"
            role="navigation"
            aria-label="Secondary"
          >
            <BottomBar />
          </section>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default React.memo(Layout);
