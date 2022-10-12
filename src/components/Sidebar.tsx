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
    <aside className='mt-10'>
      <div className='bg-indigo-600 p-4 text-2xl font-semibold leading-8 text-white'>
        カテゴリー
      </div>
      <div>
        <ul>
          {categories.map((category) => (
            <Link key={category.id} href={`/blog/category/${category.id}`}>
              <a>
                <li className='flex items-center border-b py-3 hover:bg-indigo-50 dark:hover:text-gray-600'>
                  <div className='flex grow items-center'>
                    <AiOutlineRight className='h-5 w-5' aria-hidden='true' />
                    <div className='ml-4 text-lg font-semibold leading-6 '>{category.name}</div>
                  </div>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};
