import { FC } from 'react';

type Props = {
  subHeading: string;
  title: string;
};

export const SectionHeader: FC<Props> = ({ subHeading, title }) => {
  return (
    <div className='container py-4'>
      <div className='flex flex-col items-center'>
        <p className='mb-2 font-bold text-indigo-600 dark:text-amber-400'>{subHeading}</p>
        <h2 className='w-full text-center text-3xl font-extrabold underline decoration-orange-400 decoration-8 underline-offset-8'>
          {title}
        </h2>
      </div>
    </div>
  );
};
