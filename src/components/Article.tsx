import Image from 'next/image';
import { FC } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Date } from './Date';

import styles from '@/styles/article.module.css';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export const Article: FC<Props> = ({ blog }) => {
  return (
    <article className='container'>
      <div className='my-6 inline-block'>
        <div className='rounded-3xl bg-indigo-600 px-4 py-1 text-base font-bold leading-6 text-white'>
          {blog.category.name}
        </div>
      </div>
      <h1 className='text-4xl font-extrabold'>{blog.title}</h1>
      <div className='flex items-center justify-end text-gray-500 dark:text-white'>
        <AiOutlineClockCircle className='h-6 w-6' aria-hidden='true' />
        <div className='ml-2 text-2xl font-semibold leading-8'>
          <Date dateString={blog.publishedAt} />
        </div>
      </div>
      <div className='my-8'>
        <Image width={1280} height={720} src={blog.image.url} alt={blog.title} />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={`prose max-w-none dark:prose-invert ${styles.article_style}`}
      />
    </article>
  );
};
