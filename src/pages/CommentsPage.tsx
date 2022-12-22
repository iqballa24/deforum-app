import React from 'react';
import { motion } from 'framer-motion';
import { pageMotion } from '@/constant/transition';
import { useAppSelector } from '@/lib/hooks/useRedux';

const CommentsPage = () => {
  const { ui } = useAppSelector((state) => state);

  return (
    <React.Fragment>
      <motion.ul initial="initial" animate="animate" variants={pageMotion}>
        <div className="p-5 flex flex-col justify-center items-center mt-5">
          <h1 className="text-primary font-bold text-base">
            {ui.language === 'id'
              ? `Maaf, untuk saat ini halaman sedang dalam perbaikan`
              : `Sorry, we're currently maintenance for this page`}
          </h1>
          <img
            src="/maintenance.svg"
            alt="under maintenance"
            className="w-full max-w-[300px]"
            loading="lazy"
          />
        </div>
      </motion.ul>
    </React.Fragment>
  );
};

export default React.memo(CommentsPage);
