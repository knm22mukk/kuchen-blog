import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

export const ContactForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch('/api/sendMail', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          router.push('/contact/success');
        } else {
          alert(`送信できませんでした。Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        alert(`送信できませんでした。Error: ${e}`);
      });
  };

  return (
    <form className='container'>
      <div className='my-10'>
        <label htmlFor='name' className='font-light text-gray-500 dark:text-white'>
          お名前<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
      </div>
      <div className='my-10'>
        <label htmlFor='email' className='font-light text-gray-500 dark:text-white'>
          メールアドレス<span className='text-red-500'>*</span>
        </label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        />
      </div>
      <div className='my-10'>
        <label htmlFor='message' className='font-light text-gray-500 dark:text-white'>
          お問合わせ内容<span className='text-red-500'>*</span>
        </label>
        <textarea
          rows={5}
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full rounded border border-gray-300 bg-gray-100 p-2 text-base outline-none focus:border-indigo-500 focus:bg-white dark:bg-gray-600'
        ></textarea>
      </div>
      <div className='flex justify-center'>
        <input
          type='submit'
          onClick={async (e) => await handleSubmit(e)}
          className='baseButton cursor-pointer'
        />
      </div>
    </form>
  );
};
