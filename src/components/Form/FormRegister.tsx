import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/UI';
import { FormRegisterTypes } from '@/lib/types';

const FormRegister: React.FC<{
  submitHandler: (data: FormRegisterTypes) => void;
}> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<FormRegisterTypes>();

  return (
    <form className="flex flex-col space-y-7">
      <div className="flex flex-col space-y-3">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className={`bg-transparent border py-2 px-3 rounded ${
            errors.name && 'border-red-500'
          }`}
          {...register('name', {
            required: 'Name field is required',
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
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
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: 'Email must be a valid email',
            },
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
      <div className="flex flex-col space-y-3">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          className={`bg-transparent border py-2 px-3 rounded ${
            errors.confirmPassword && 'border-red-500'
          }`}
          {...register('confirmPassword', {
            validate: (value) =>
              value === getValues('password') || 'The password do not match',
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        title="register"
        isPrimary
        onClick={handleSubmit(submitHandler)}
      >
        {isSubmitting ? 'Loading' : 'Register'}
      </Button>
    </form>
  );
};

export default React.memo(FormRegister);
