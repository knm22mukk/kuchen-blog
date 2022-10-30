import { FC } from 'react';
import { BlogCard } from '@/components/BlogCard';
import { Blog } from '@/types/blog';

type Props = {
  blogs: Blog[];
};

export const BlogGrid: FC<Props> = ({ blogs }) => {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid gap-6 sm:grid-cols-2'>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
