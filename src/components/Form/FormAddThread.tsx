import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';

import { Button } from '@/components/UI';
import { dropIn } from '@/constant/transition';

import { useAppDispatch } from '@/lib/hooks/useRedux';
import { createThreadTypes } from '@/lib/types';
import { asyncCreateThread } from '@/store/threads/action';

const FormAddThreads: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<createThreadTypes>();

  const submitHandler = async (data: createThreadTypes) => {
    try {
      await dispatch(asyncCreateThread(data));
    } catch (err) {
      console.log(err);
    } finally {
      onClose();
    }
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="fixed left-[50%] -translate-x-2/4 z-20 w-full flex flex-col max-w-2xl bg-white dark:bg-bg-dark border rounded-lg overflow-hidden"
    >
      <div className="w-full flex flex-row items-center justify-between py-3 px-5 bg-orange-light dark:bg-primary">
        <span>New Thread</span>
        <AiOutlineClose
          size={16}
          className="hover:text-red cursor-pointer"
          onClick={onClose}
        />
      </div>
      <form className="w-full pt-3 pb-8 px-5 space-y-3">
        <input
          id="title"
          type="text"
          className="w-full bg-transparent border-b p-2 focus:outline-none focus:border-b-2"
          placeholder="Title"
          {...register('title', {
            required: 'Title field is required',
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-xs">{errors.title.message}</p>
        )}
        <input
          id="category"
          type="text"
          className="w-full bg-transparent border-b p-2 focus:outline-none focus:border-b-2"
          placeholder="Category"
          {...register('category', {
            required: 'Category field is required',
          })}
        />
        {errors.category && (
          <p className="text-red-500 text-xs">{errors.category.message}</p>
        )}
        <textarea
          id="body"
          className="w-full min-h-[100px] text-sm md:text-base border bg-transparent dark:border-white p-5"
          {...register('body', {
            required: 'Body field is required',
          })}
        />
        {errors.body && (
          <p className="text-red-500 text-xs">{errors.body.message}</p>
        )}
        <div className="flex justify-end">
          <Button
            type="submit"
            title="Send"
            onClick={handleSubmit(submitHandler)}
            isPrimary
          >
            {isSubmitting ? 'Loading...' : 'Send'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default FormAddThreads;
