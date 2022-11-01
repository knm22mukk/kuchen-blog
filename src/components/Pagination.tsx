import Link from 'next/link';
import { FC } from 'react';

type Props = {
  currentPageNumber: number;
  totalCount: number;
  BLOG_PER_PAGE: number;
};

export const Pagination: FC<Props> = ({ currentPageNumber, totalCount, BLOG_PER_PAGE }) => {
  const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE);
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className='container'>
      <ul className='my-12 flex px-3'>
        {range(1, pageCount).map((number, index) => (
          <li key={index}>
            <Link href={`/blog/page/${number}`}>
              <a
                className={`flex h-10 w-10 items-center justify-center rounded-full hover:bg-indigo-500 hover:text-white ${
                  currentPageNumber === number && 'bg-indigo-400 text-white'
                }`}
              >
                {number}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
