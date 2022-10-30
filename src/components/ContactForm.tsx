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
  const [buttonDisable, setButtonDisabe] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: 'onSubmit', criteriaMode: 'all' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setButtonText('送信中...');
    setButtonDisabe(true);
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
          setButtonDisabe(false);
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
        <input
          placeholder='お名前'
          type='text'
          {...register('name', { required: true })}
          className='mt-6 w-full border-b-2 bg-gray-50 p-3 font-medium transition duration-300 focus:border-indigo-500 focus:outline-none dark:bg-gray-600'
        />
        {errors.name && <div className='text-red-500'>*入力が必須の項目です</div>}
      </div>
      <div className='my-10'>
        <input
          placeholder='メールアドレス'
          type='text'
          {...register('email', { required: true })}
          className='mt-6 w-full border-b-2 bg-gray-50 p-3 font-medium transition duration-300 focus:border-indigo-500 focus:outline-none dark:bg-gray-600'
        />
        {errors.email && <div className='text-red-500'>*入力が必須の項目です</div>}
      </div>
      <div className='my-10'>
        <textarea
          placeholder='お問合せ内容'
          rows={5}
          {...register('message', { required: true })}
          className='mt-6 w-full border-b-2 bg-gray-50 p-3 font-medium transition duration-300 focus:border-indigo-500 focus:outline-none dark:bg-gray-600'
        ></textarea>
        {errors.message && <div className='text-red-500'>*入力が必須の項目です</div>}
      </div>
      <div className='flex justify-center'>
        <button
          disabled={buttonDisable}
          type='submit'
          className={`baseButton disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};
