import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/UI';
import { FormLoginTypes } from '@/lib/types';

const FormLogin: React.FC<{
  submitHandler: (data: FormLoginTypes) => void;
}> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginTypes>();

  return (
    <form className="flex flex-col space-y-7">
      <div className="flex flex-col space-y-3">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="text"
          placeholder="Your email address"
          className={`bg-transparent border py-2 px-3 rounded ${
            errors.email && 'border-red-500'
          }`}
          {...register('email', {
            required: 'Email field is required',
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col space-y-3">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          className={`bg-transparent border py-2 px-3 rounded ${
            errors.password && 'border-red-500'
          }`}
          {...register('password', {
            required: 'Password field is required',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)[\w@$!%*?&]{5,}$/g,
              message:
                'Password must be 5 or more character and contain at least one letter and one number',
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        title="login"
        isPrimary
        onClick={handleSubmit(submitHandler)}
      >
        {isSubmitting ? 'Loading...' : 'Login'}
      </Button>
    </form>
  );
};

export default React.memo(FormLogin);
