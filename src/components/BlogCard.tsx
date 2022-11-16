import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Date } from './Date';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <a className='transition duration-300 hover:scale-105'>
        <div className='mx-auto box-border max-w-sm rounded-md border border-gray-300 bg-white shadow-md dark:bg-gray-800'>
          <Image
            src={blog.image.url}
            height={216}
            width={384}
            alt={blog.title}
            className='rounded-t-md'
          />
          <div className='flex min-h-[160px] flex-col justify-between p-4'>
            <div className='flex'>
              <div className='rounded-3xl bg-indigo-600 px-3 py-1 font-bold text-white'>
                {blog.category.name}
              </div>
            </div>
            <h2 className='text-xl font-bold leading-8'>{blog.title}</h2>
            <div className='text-right text-lg font-medium leading-6 text-gray-500 dark:text-white'>
              <Date dateString={blog.publishedAt} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
