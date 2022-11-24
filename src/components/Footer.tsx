import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { headerNavLinks } from '@/data/headerNavLinks';

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center py-8 shadow-inner'>
      <Link href='/'>
        <a>
          <Image src='/images/logo250x90.png' width={250} height={90} alt='kuchen blog' />
        </a>
      </Link>
      <div className='py-5'>
        {headerNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className='textLink'>{link.title}</a>
          </Link>
        ))}
      </div>
      <Link href='/privacypolicy'>
        <a className='textLink'>Privacy Policy</a>
      </Link>
      <p className='mt-5 text-center text-sm font-medium tracking-wide text-gray-500 dark:text-white'>
        &copy; Copyright 2022,Kuchen Blog. All Rights Reserved.
      </p>
    </footer>
  );
};
