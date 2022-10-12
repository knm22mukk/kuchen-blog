import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BaseButton } from '@/components/Button';
import { SectionHeader } from '@/components/SectionHeader';

const custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>ページが見つかりませんでした | くーへんブログ</title>
      </Head>
      <div className='container flex h-screen w-screen flex-col items-center justify-center'>
        <div className='my-6'>
          <Image src='/images/404image.webp' alt='404' width={600} height={400} />
        </div>
        <h3 className='my-2 text-center text-3xl font-bold text-red-500'>
          おっと! ページが見つかりませんでした！
        </h3>
        <p className='mb-8 text-center text-lg text-gray-500'>
          The page youre looking for doesnt exist.
        </p>
        <Link href='/'>
          <a>
            <BaseButton typename='button'>ホームに戻る</BaseButton>
          </a>
        </Link>
      </div>
    </>
  );
};

export default custom404;
