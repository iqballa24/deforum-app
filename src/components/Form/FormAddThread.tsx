import React from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { RichTextEditor } from '@mantine/rte';

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
    control,
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
      <form className="w-full pt-3 pb-8 px-5 space-y-5">
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
        <Controller
          control={control}
          name="body"
          rules={{ required: 'Body field is required' }}
          render={({ field: { onChange, value } }) => (
            <RichTextEditor
              id="body"
              value={value}
              onChange={onChange}
              className="bg-transparent rounded-md border border-dark-secondary dark:border-white text-dark-secondary dark:text-white overflow-scroll max-h-52 scrollbar-hide"
              controls={[
                ['bold', 'italic', 'underline', 'link', 'image'],
                ['unorderedList', 'h1', 'h2', 'h3'],
                ['sup', 'sub'],
                ['alignLeft', 'alignCenter', 'alignRight'],
              ]}
            />
          )}
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
