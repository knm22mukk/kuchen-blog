import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: FC = () => {
  const [buttonText, setButtonText] = useState<string>('送信する');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: 'onSubmit', criteriaMode: 'all' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setButtonText('送信中...');
    fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          router.push('/contact/success');
        } else {
          alert(`送信できませんでした。Error: Status Code ${res.status}`);
          setButtonText('再送信する');
        }
      })
      .catch((e) => {
        alert(`送信できませんでした。Error: ${e}`);
      });
  };

  const router = useRouter();

  return (
    <form className='container' onSubmit={handleSubmit(onSubmit)}>
      <div className='my-10'>
        <label htmlFor='name' className='font-light text-gray-500 dark:text-white'>
          お名前<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          {...register('name', { required: true })}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
        {errors.name && <div className='text-red-500'>入力が必須の項目です</div>}
      </div>
      <div className='my-10'>
        <label htmlFor='email' className='font-light text-gray-500 dark:text-white'>
          メールアドレス<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          {...register('email', { required: true })}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
        {errors.email && <div className='text-red-500'>入力が必須の項目です</div>}
      </div>
      <div className='my-10'>
        <label htmlFor='message' className='font-light text-gray-500 dark:text-white'>
          お問合わせ内容<span className='text-red-500'>*</span>
        </label>
        <textarea
          rows={5}
          {...register('message', { required: true })}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        ></textarea>
        {errors.message && <div className='text-red-500'>入力が必須の項目です</div>}
      </div>
      <div className='flex justify-center'>
        <button type='submit' className='baseButton'>
          {buttonText}
        </button>
      </div>
    </form>
  );
};
