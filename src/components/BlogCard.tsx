import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Date } from './Date';

type Props = {
  path: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
};

export const BlogCard: FC<Props> = ({ path, title, description, imageSrc, date }) => {
  return (
    <Link href={path}>
      <a className='transition duration-300 hover:scale-105 hover:text-indigo-600'>
        <div className='mx-auto max-w-sm'>
          <div className='rounded-lg border border-gray-200 shadow-md'>
            <Image src={imageSrc} width={384} height={216} alt={title} className='rounded-t-lg' />
            <div className='p-5'>
              <p className='my-4 text-sm font-semibold italic text-gray-600 dark:text-white'>
                <Date dateString={date} />
              </p>
              <p className='text-xl font-bold '>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
