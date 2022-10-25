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
    <div className='mx-auto box-border max-w-sm rounded-lg border border-gray-300 shadow-md'>
      <Link href={`/blog/${blog.id}`}>
        <a className='transition duration-300 hover:scale-105'>
          <div className='relative'>
            <div className='absolute top-2 left-2 z-10'>
              <div className='rounded-3xl bg-orange-500 px-4 py-1 text-base font-bold leading-6 text-white'>
                {blog.category.name}
              </div>
            </div>
            <div>
              <Image
                src={blog.image.url}
                height={216}
                width={384}
                alt={blog.title}
                className='rounded-t-lg'
              />
            </div>
          </div>
          <div className='flex min-h-[160px] flex-col justify-between p-4'>
            <h2 className='text-2xl font-bold leading-8'>{blog.title}</h2>
            <div className='text-right text-lg font-medium leading-6 text-gray-500 dark:text-white'>
              <Date dateString={blog.publishedAt} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
