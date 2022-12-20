import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { Button } from '@/components/UI';
import { asyncCreateCommentThread } from '@/store/threadDetail/action';

export type contentTypes = {
  content: string;
  id: string;
};

const FormComment = () => {
  const dispatch = useAppDispatch();
  const { threadId } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<contentTypes>();

  const watchContent = watch('content', '');

  const submitHandler = async (data: contentTypes) => {
    try {
      if (threadId) {
        await dispatch(asyncCreateCommentThread(data.content, threadId));
      }
      reset({ content: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="space-y-5">
      <textarea
        id="content"
        className="w-full min-h-[160px] text-sm md:text-base border dark:border-white p-5 mt-5 bg-transparent"
        {...register('content', {
          required: 'Comment field is required',
        })}
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          title="Send"
          isPrimary
          onClick={handleSubmit(submitHandler)}
          disabled={watchContent === ''}
        >
          {isSubmitting ? 'Loading...' : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default React.memo(FormComment);
