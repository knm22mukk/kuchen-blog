import Link from 'next/link';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
  lists: {
    title: string;
    path?: string;
  }[];
};

export const Breadcrumb: FC<Props> = ({ lists }) => {
  return (
    <div className='container mx-auto py-2'>
      <ol aria-label='breadcrumb' className='flex items-center font-bold'>
        <li>
          <Link href='/'>
            <a className='text-sm underline hover:text-indigo-600 md:text-base'>ホーム</a>
          </Link>
        </li>
        <FaChevronRight aria-hidden='true' className='mx-2 text-xs' />
        {lists.map(({ title, path = '/' }, index) => (
          <li key={index}>
            {lists.length - 1 !== index ? (
              <>
                <Link href={path}>
                  <a className='text-sm underline hover:text-indigo-600 md:text-base'>{title}</a>
                </Link>
                <FaChevronRight aria-hidden='true' className='mx-2 text-xs' />
              </>
            ) : (
              <span aria-current='page' className='text-sm md:text-base'>
                {title}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
