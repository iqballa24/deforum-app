import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ThreadCard from '../components/ThreadCard';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const DetailThread = () => {
  return (
    <React.Fragment>
      <Link
        to="/threads"
        className="flex flex-row items-center space-x-3 hover:space-x-1 cursor-pointer w-fit"
      >
        <AiOutlineArrowLeft size={20} />
        <span className="transition-all">Back</span>
      </Link>
      <ul>
        <ThreadCard shortenBody={false} bordered={false} />
      </ul>
      <div className="my-5 text-center">
        <hr className="mb-5" />
        <Link to="comments" className="underline">
          Load comments
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default React.memo(DetailThread);
