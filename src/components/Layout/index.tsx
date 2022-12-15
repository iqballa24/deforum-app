import React from 'react';
import Header from './Header';
import { Sidebar, BottomBar } from './Navigation/';
import { Container } from '../UI';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-8 h-full">
        <Container>
          <div
            className="hidden sm:flex flex-col sm:w-2/12 md:w-3/12 h-full lg:pr-5"
            role="navigation"
            aria-label="Primary"
          >
            <Sidebar />
          </div>
          <div
            className="w-full h-[605px] border sm:w-10/12 md:w-6/12 overflow-y-scroll scrollbar-hide z-0 sm:px-5"
            role="main"
          >
            <h1>Tester</h1>
          </div>
          <div className="hidden md:flex flex-col w-3/12 space-y-5">
            <h1>Tester</h1>
          </div>

          {/* SHOWED ONLY ON SMALL DEVICE */}
          <div
            className="fixed bg-white w-full left-0 right-0 bottom-0 sm:hidden z-10"
            role="navigation"
            aria-label="Secondary"
          >
            <BottomBar />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Layout;
