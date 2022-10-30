import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BlogCard } from './BlogCard';
import { SectionHeader } from '@/components/SectionHeader';
import { featureTexts } from '@/data/featureTexts';
import { Blog } from '@/types/blog';

type Props = {
  blogs: Blog[];
};

export const Hero: FC<Props> = ({ blogs }) => {
  return (
    <section>
      <div className=''>
        <Image
          src='/images/heroImage.png'
          alt='くーへんブログ'
          width={1280}
          height={700}
          className='object-cover'
        />
      </div>
      <div className='py-8'>
        <SectionHeader subHeading='CATEGORIES' title='こんなことブログに書きます！' />
        <div className='container grid gap-8 py-5 lg:grid-cols-2'>
          {featureTexts.map((text, index) => (
            <div key={index} className='flex max-w-md flex-col sm:mx-auto sm:flex-row'>
              <div className='mr-4'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100'>
                  <AiOutlineCheck className='h-8 w-8 text-indigo-600' />
                </div>
              </div>
              <div>
                <h3 className='mb-3 text-xl font-bold leading-5'>{text.title}</h3>
                <p className='mb-3 text-sm'>{text.paragragh}</p>
                <Link href={text.href}>
                  <a className='mx-3 border-b-2 border-transparent font-bold text-indigo-500 duration-300 hover:border-indigo-600 hover:text-indigo-600'>
                    記事を見てみる
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-8'>
        <SectionHeader subHeading='LATEST' title='最新記事' />
        <div className='container mx-auto py-8'>
          <div className='grid gap-6 sm:grid-cols-2'>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <div className='mx-auto flex justify-center'>
          <Link href='/blog'>
            <a className='baseButton'>記事一覧</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
