import { FC } from 'react';

type Props = {
  subHeading: string;
  title: string;
};

export const SectionHeader: FC<Props> = ({ subHeading, title }) => {
  return (
    <div className='container py-4'>
      <div className='flex flex-col items-center'>
        <p className='mb-2 font-bold text-orange-500'>{subHeading}</p>
        <h2 className='w-full text-center text-3xl font-black tracking-wide'>{title}</h2>
      </div>
    </div>
  );
};
