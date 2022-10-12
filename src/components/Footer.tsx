import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { headerNavLinks } from '@/data/headerNavLinks';

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center py-8 shadow-inner'>
      <Image src='/images/logo500x180.png' width={250} height={90} alt='kuchen blog' />
      <div className='py-5'>
        {headerNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className='mx-4 border-b-2 border-transparent font-bold transition duration-300 hover:border-indigo-600 hover:text-indigo-600'>
              {link.title}
            </a>
          </Link>
        ))}
      </div>
      <Link href='/privacypolicy'>
        <a className='border-b-2 border-transparent text-sm font-semibold transition duration-300 hover:border-indigo-600 hover:text-indigo-600'>
          PRIVACY POLICY
        </a>
      </Link>
      <p className='mt-5 text-center text-sm font-medium tracking-wide text-gray-500 dark:text-white'>
        &copy; Copyright 2022,Kuchen Blog. All Rights Reserved.
      </p>
    </footer>
  );
};
