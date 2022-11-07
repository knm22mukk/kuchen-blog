import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const categories = [
  {
    id: 'job',
    name: '仕事・効率化',
  },
  {
    id: 'food',
    name: 'グルメ、旅行',
  },
  {
    id: 'programming',
    name: 'プログラミング',
  },
];

export const Sidebar: FC = () => {
  return (
    <aside className='flex flex-col px-8'>
      <div className='bg-gradient-to-r from-cyan-500 to-indigo-500 p-4 text-2xl font-semibold leading-8 text-white'>
        プロフィール
      </div>
      <div className='flex items-center justify-center'>
        <Link href='/about'>
          <a>
            <Image
              src='/images/Klogo500x500.png'
              width={200}
              height={200}
              className='h-[100px] w-[100px] rounded-full object-cover'
              alt='プロフィールアイコン'
            />
          </a>
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center p-4'>
        <div className='text-xl font-bold leading-7'>くーへん</div>
      </div>
      <div className='text-base font-normal leading-6'>
        <p>サラリーマン営業/31歳/嫁と娘の3人暮らし</p>
        <br />
        <p>
          プログラミング学習のアウトプットとして、また日々感じたことやプログラミングに関することをゆるく発信します。
        </p>
        <br />
        <p>
          ブログ運営や記事に関するご質問があればTwitterのDMかお問合せページからご連絡をいただけますと幸いです。
        </p>
      </div>

      <div className='mt-10 bg-gradient-to-r from-cyan-500 to-indigo-500 p-4 text-2xl font-semibold leading-8 text-white'>
        カテゴリー
      </div>
      <div className='flex flex-col'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.id}`}>
            <a className='flex items-center border-b py-5 hover:bg-indigo-50 dark:hover:text-gray-600'>
              <AiOutlineRight className='text-2xl' aria-hidden='true' />
              <span className='ml-4 text-lg font-semibold leading-6'>{category.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
};
