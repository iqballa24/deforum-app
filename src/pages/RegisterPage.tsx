import React from 'react';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import FormRegister from '@/components/Form/FormRegister';
import { FormRegisterTypes } from '@/lib/types';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncRegisterUser } from '@/store/users/action';
import { slideRight } from '@/constant/transition';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = async (data: FormRegisterTypes) => {
    try {
      const { error } = await dispatch(asyncRegisterUser(data));
      if (error) return;

      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={slideRight}
      transition={{ type: 'linear' }}
      className="w-full flex justify-center relative overflow-scroll scrollbar-hide py-10 px-5"
    >
      <section className="flex flex-col w-full max-w-lg space-y-10 ">
        <div className="flex flex-row items-center justify-center md:space-x-3">
          <img
            src="/LOGO.svg"
            alt="logo deforum"
            className="w-full max-w-[62px]"
          />
          <span className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#EFAE63]">
            DEFORUM
          </span>
        </div>
        <FormRegister submitHandler={submitHandler} />
        <div className="space-y-5 text-center">
          <hr />
          <p className="text-gray-400 dark:text-white font-light text-sm">
            Already have an account ?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              login now.
            </Link>
          </p>
        </div>
      </section>
    </motion.main>
  );
};

export default React.memo(RegisterPage);
