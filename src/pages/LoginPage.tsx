import React from 'react';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FormLogin from '@/components/Form/FormLogin';
import { slideRight } from '@/constant/transition';
import { FormLoginTypes } from '@/lib/types';
import { setAuthUser } from '@/store/auth/action';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const submitHandler = async (data: FormLoginTypes) => {
    await dispatch(setAuthUser(data));
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={slideRight}
      className="w-full h-[100vh] relative"
    >
      <section className="flex flex-col p-5 fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-lg space-y-10">
        <div className="flex flex-row items-center justify-center space-x-3">
          <img
            src="/LOGO.svg"
            alt="logo deforum"
            className="w-full max-w-[62px]"
          />
          <span className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EFAE63]">
            DEFORUM
          </span>
        </div>
        <FormLogin submitHandler={submitHandler} />
        <div className="space-y-5 text-center">
          <hr />
          <p className="text-gray-400 dark:text-white font-light text-sm">
            Dont have an account ?{' '}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register now.
            </Link>
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default React.memo(LoginPage);
