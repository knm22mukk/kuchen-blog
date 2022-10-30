import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineCheck, AiOutlineTwitter, AiOutlineMessage } from 'react-icons/ai';
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
      <div className='container my-8 rounded-lg bg-indigo-600 py-6 text-white'>
        <SectionHeader subHeading='CONTACT ME' title='お問い合わせはこちらから' />
        <p className='mt-4 text-center text-sm font-medium md:text-left md:text-base lg:text-lg'>
          ブログの記事や運営に関すること、不具合などございましたらお気軽にお問い合わせください。お問い合わせは下記リンクのお問い合わせページか、TwitterのDMにてお送りいただけますと幸いです。なるべくお早めにお返事させていただきます。
        </p>
        <div className='my-3 flex flex-col items-center py-5'>
          <Link href='/contact'>
            <a>
              <button className='outlineButton mb-4 inline-flex items-center'>
                <AiOutlineMessage className='mr-2 h-5 w-5' />
                お問い合わせページ
              </button>
            </a>
          </Link>
          <Link href='https://twitter.com/kuchen_22'>
            <a target='_brank'>
              <button className='outlineButton inline-flex items-center'>
                <AiOutlineTwitter className='mr-2 h-5 w-5' />
                <span>Twitter @kuchen_22</span>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
