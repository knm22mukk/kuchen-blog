import { FC, ReactNode } from 'react';

type Props = {
  typename: 'button' | 'submit';
  children: ReactNode;
};

export const BaseButton: FC<Props> = ({ typename, children }) => {
  return (
    <button
      type={typename}
      className='rounded bg-blue-500 py-4 px-14 text-xl font-bold text-white hover:bg-indigo-700'
    >
      {children}
    </button>
  );
};
