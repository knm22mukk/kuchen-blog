import { FC } from 'react';
import { BaseButton } from './Button';

export const ContactForm: FC = () => {
  return (
    <form className='container'>
      <div className='my-10'>
        <label htmlFor='name' className='font-light text-gray-500 dark:text-white'>
          お名前<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
      </div>
      <div className='my-10'>
        <label htmlFor='email' className='font-light text-gray-500 dark:text-white'>
          メールアドレス<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
      </div>
      <div className='my-10'>
        <label htmlFor='message' className='font-light text-gray-500 dark:text-white'>
          お問合わせ内容<span className='text-red-500'>*</span>
        </label>
        <textarea
          rows={5}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        ></textarea>
      </div>
      <div className='flex justify-center'>
        <BaseButton typename='submit'>送信</BaseButton>
      </div>
    </form>
  );
};
