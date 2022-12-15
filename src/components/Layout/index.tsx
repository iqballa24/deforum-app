import React from 'react';
import Header from './Header';
import { Sidebar, BottomBar } from './Navigation/';
import PopularCard from '../PopularCard';
import TopUsersCard from '../TopUsersCard';
import { Container } from '../UI';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-8 h-full">
        <Container>
          <section
            className="hidden sm:flex flex-col sm:w-2/12 md:w-3/12 h-full lg:pr-5"
            role="navigation"
            aria-label="Primary"
          >
            <Sidebar />
          </section>
          <section
            className="w-full h-[605px] sm:w-10/12 md:w-6/12 overflow-y-scroll scrollbar-hide z-0 sm:px-5"
            role="main"
          >
            {children}
          </section>
          <section className="hidden md:flex flex-col w-3/12 space-y-5">
            <PopularCard />
            <TopUsersCard />
          </section>

          {/* SHOWED ONLY ON SMALL DEVICE */}
          <section
            className="fixed bg-white w-full left-0 right-0 bottom-0 sm:hidden z-10"
            role="navigation"
            aria-label="Secondary"
          >
            <BottomBar />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Layout;
